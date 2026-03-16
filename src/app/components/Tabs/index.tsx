'use client';

import { useState } from 'react';
import { cn } from '@/app/utility/cn';

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
  /** Inactive tab text color (e.g. '#6B7280') */
  inactiveTextColor?: string;
  /** Active tab text color (e.g. '#1F2937') */
  activeTextColor?: string;
  /** Active tab bottom border color (e.g. '#D8A660') */
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
  const [activeId, setActiveId] = useState(defaultActiveId ?? items[0]?.id ?? '');

  const hasCustomColors =
    inactiveTextColor != null ||
    activeTextColor != null ||
    activeBorderColor != null;

  const baseTabClass = cn(
    'text-[12px] font-normal border-transparent shrink-0 whitespace-nowrap px-2 py-[7px] transition-colors duration-300',
    'cursor-pointer',
    hasCustomColors ? 'border-b-2' : 'border-b-4',
    !hasCustomColors && 'text-white hover:text-white/90',
  );
  const activeClass = cn(
    hasCustomColors ? 'border-b-2 font-medium' : 'border-b-4 font-semibold',
    !hasCustomColors && 'border-[#EFC96D]',
    activeTabClassName,
  );

  return (
    <div className={cn('flex flex-1 items-center justify-end gap-[5.5px]', className)}>
      {items.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setActiveId(id)}
            className={cn(
              baseTabClass,
              tabClassName,
              isActive && activeClass,
            )}
            style={
              hasCustomColors
                ? {
                    color: isActive ? activeTextColor : inactiveTextColor,
                    ...(isActive && activeBorderColor
                      ? { borderBottomColor: activeBorderColor }
                      : {}),
                  }
                : undefined
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
