import { ChangeEvent } from 'react';

export interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

export const NumberInput = ({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
  className = ''
}: NumberInputProps) => {
  const handleDecrement = () => {
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  const containerClasses = `
    flex items-center bg-audiophile-white
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  const buttonClasses = 'w-12 h-12 flex items-center justify-center text-audiophile-black hover:text-audiophile-orange transition-colors duration-200 cursor-pointer border-none bg-transparent disabled:cursor-not-allowed disabled:hover:text-audiophile-black';

  return (
    <div className={containerClasses}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className={buttonClasses}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        disabled={disabled}
        className="w-16 h-12 text-center border-none bg-transparent text-body font-bold focus:outline-none"
        aria-label="Quantity"
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className={buttonClasses}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
