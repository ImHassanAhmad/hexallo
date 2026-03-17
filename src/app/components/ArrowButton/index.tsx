import { cn } from '@/app/utility/cn';

type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export default function ArrowButton({
  direction,
  onClick,
  disabled,
  className,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      className={cn(
        'h-10 w-10 rounded-full bg-white/90 backdrop-blur shadow-[0px_6px_22px_0px_#0000001A] flex items-center justify-center',
        'hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#484848]"
      >
        {direction === 'left' ? (
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
