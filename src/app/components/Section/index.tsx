import type { ReactNode } from 'react';
import { cn } from '@/app/utility/cn';

export type SectionProps = {
  title: string;
  className?: string;
  children: ReactNode;
  titleId?: string;
  titleTrailing?: ReactNode;
  hideTrailing?: boolean;
};

export default function Section({
  title,
  className,
  children,
  titleId,
  titleTrailing,
  hideTrailing = false,
}: SectionProps) {
  return (
    <div className={cn(className)}>
      <header className="mb-6 flex items-center justify-between">
        <h2
          id={titleId}
          className="flex items-center gap-[10.5px] text-[18px] font-bold text-[#484848]"
        >
          {title}
          {!hideTrailing && titleTrailing}
        </h2>
      </header>
      {children}
    </div>
  );
}
