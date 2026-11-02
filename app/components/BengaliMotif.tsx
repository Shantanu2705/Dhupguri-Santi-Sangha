import React from 'react';

interface BengaliMotifProps {
  className?: string;
  variant?: 'divider' | 'flourish' | 'lamp' | 'corner' | 'badge';
  color?: string;
}

export const BengaliMotif: React.FC<BengaliMotifProps> = ({
  className = '',
  variant = 'divider',
  color = '#C6A75E',
}) => {
  if (variant === 'lamp') {
    return (
      <svg
        className={className}
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Traditional Pradeep / Diya */}
        <path
          d="M24 6C24 6 20 12 20 16C20 18.2 21.8 20 24 20C26.2 20 28 18.2 28 16C28 12 24 6 24 6Z"
          fill="#D4AF37"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M24 10C24 10 22 13 22 15C22 16.1 22.9 17 24 17C25.1 17 26 16.1 26 15C26 13 24 10 24 10Z"
          fill="#FDE68A"
        />
        <path
          d="M12 24C12 22 16 21 24 21C32 21 36 22 36 24C36 30 30 35 24 35C18 35 12 30 12 24Z"
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
        <ellipse cx="24" cy="23" rx="12" ry="3" stroke={color} strokeWidth="1.5" fill="none" />
        <path
          d="M22 35L20 42H28L26 35"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path d="M16 42H32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'flourish') {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#C6A75E]" />
        <svg
          width="24"
          height="14"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 1C14 6 9 9 1 9C9 9 14 12 16 17C18 12 23 9 31 9C23 9 18 6 16 1Z"
            fill={color}
          />
          <circle cx="16" cy="9" r="2" fill="#FAF8F2" />
        </svg>
        <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#C6A75E]" />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="7" stroke={color} strokeWidth="1" />
        <circle cx="12" cy="12" r="3" fill={color} />
      </svg>
    );
  }

  // default: divider
  return (
    <div className={`flex items-center justify-center my-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C6A75E]/60 to-[#C6A75E]" />
      <div className="mx-3 flex items-center space-x-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill={color} />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
      </div>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#C6A75E]/60 to-[#C6A75E]" />
    </div>
  );
};

