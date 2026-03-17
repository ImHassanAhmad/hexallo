'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/app/utility/cn';
import { calcVisibleCount } from '@/app/utility';

export type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  defaultActiveId?: string;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  inactiveTextColor?: string;
  activeTextColor?: string;
  activeBorderColor?: string;
};

export default function Tabs({
  items,
  defaultActiveId,
  className,
  tabClassName,
  activeTabClassName,
  inactiveTextColor,
  activeTextColor,
  activeBorderColor,
}: TabsProps) {
  const [activeId, setActiveId] = useState(
    defaultActiveId ?? items[0]?.id ?? '',
  );
  const [visibleCount, setVisibleCount] = useState(items.length);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const tabWidthsRef = useRef<number[]>([]);
  const measureRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const hasCustomColors =
    inactiveTextColor != null ||
    activeTextColor != null ||
    activeBorderColor != null;

  const baseTabClass = cn(
    'border-b-4 text-[12px] font-normal border-transparent shrink-0 whitespace-nowrap px-2 pt-[10px] pb-[5px] transition-all duration-200 cursor-pointer',
    !hasCustomColors && 'text-white hover:text-white/90',
    hasCustomColors && 'hover:opacity-75',
  );

  const activeTabClass = cn(
    hasCustomColors ? 'font-medium' : 'font-semibold border-[#EFC96D]',
    activeTabClassName,
  );

  const recalculate = useCallback(() => {
    measureRefs.current.forEach((el, i) => {
      if (el) tabWidthsRef.current[i] = el.offsetWidth;
    });
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    setVisibleCount(
      calcVisibleCount(
        tabWidthsRef.current.slice(0, items.length),
        containerWidth,
      ),
    );
  }, [items.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const id = setTimeout(() => {
      recalculate();
    }, 0);
    const ro = new ResizeObserver(() => {
      recalculate();
    });
    ro.observe(container);
    return () => {
      clearTimeout(id);
      ro.disconnect();
    };
  }, [recalculate]);

  const visibleItems = items.slice(0, visibleCount);
  const overflowItems = items.slice(visibleCount);
  const activeInOverflow = overflowItems.some((item) => item.id === activeId);

  const customColorStyle = (isActive: boolean) =>
    hasCustomColors
      ? {
          color: isActive ? activeTextColor : inactiveTextColor,
          ...(isActive && activeBorderColor
            ? { borderBottomColor: activeBorderColor }
            : {}),
        }
      : undefined;

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-1 min-w-0 items-center gap-[5.5px]',
        className,
      )}
    >
      {/* Hidden layer to measure each tab's natural width */}
      <div
        className="absolute top-0 left-0 invisible pointer-events-none flex items-center gap-[5.5px]"
        aria-hidden
      >
        {items.map(({ id, label }, i) => (
          <button
            key={id}
            ref={(el) => {
              measureRefs.current[i] = el;
            }}
            className={cn(baseTabClass, tabClassName)}
            type="button"
            tabIndex={-1}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visible tabs */}
      {visibleItems.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setActiveId(id)}
            className={cn(
              baseTabClass,
              tabClassName,
              isActive && activeTabClass,
            )}
            style={customColorStyle(isActive)}
          >
            {label}
          </button>
        );
      })}

      {/* Overflow "•••" trigger + dropdown */}
      {overflowItems.length > 0 && (
        <div
          className="relative shrink-0 pb-1"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            type="button"
            className={cn(
              'border-b-4 text-[12px] font-normal whitespace-nowrap px-2 pt-[10px] pb-[5px] cursor-pointer transition-all duration-200 tracking-widest',
              !hasCustomColors && [
                'text-white hover:text-white/90',
                activeInOverflow
                  ? 'font-semibold border-[#EFC96D]'
                  : 'border-transparent',
              ],
              hasCustomColors && [
                'hover:opacity-75',
                activeInOverflow ? 'font-medium' : 'border-transparent',
              ],
            )}
            style={customColorStyle(activeInOverflow)}
            aria-label="More tabs"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            •••
          </button>

          <div
            className={cn(
              'absolute top-full left-0 z-50 min-w-[130px] rounded-lg border border-black/10 bg-white shadow-xl',
              'transition-all duration-150 origin-top-left',
              dropdownOpen
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none',
            )}
          >
            {overflowItems.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setActiveId(id);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    'block w-full text-left px-3 py-2 text-[12px] whitespace-nowrap transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100',
                    !hasCustomColors && [
                      'text-gray-700',
                      isActive && 'font-semibold text-[#AE6F28] bg-gray-50',
                    ],
                    hasCustomColors && isActive && 'font-semibold bg-gray-50',
                  )}
                  style={
                    hasCustomColors
                      ? {
                          color:
                            isActive && activeBorderColor
                              ? activeBorderColor
                              : inactiveTextColor,
                        }
                      : undefined
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
