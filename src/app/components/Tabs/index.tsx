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

  const hasCustomColors =
    inactiveTextColor != null ||
    activeTextColor != null ||
    activeBorderColor != null;

  const baseTabClass = cn(
    'border-b-4 text-[12px] font-normal border-transparent shrink-0 whitespace-nowrap px-2 pt-[10px] pb-[5px] transition-all duration-200',
    'cursor-pointer',
    !hasCustomColors && 'text-white hover:text-white/90',
    hasCustomColors && 'hover:opacity-75',
  );
  const activeClass = cn(
    hasCustomColors ? 'font-medium' : 'font-semibold',
    !hasCustomColors && 'border-[#EFC96D]',
    activeTabClassName,
  );

  return (
    <div
      className={cn(
        'flex flex-1 items-center justify-end gap-[5.5px]',
        className,
      )}
    >
      {items.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setActiveId(id)}
            className={cn(baseTabClass, tabClassName, isActive && activeClass)}
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
