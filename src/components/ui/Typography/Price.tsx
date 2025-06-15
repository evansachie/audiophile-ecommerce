import { formatPrice } from '../../../utils/formatters';

export interface PriceProps {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'black' | 'white' | 'orange';
}

export const Price = ({
  amount,
  size = 'md',
  className = '',
  color = 'black'
}: PriceProps) => {
  const sizeClasses = {
    sm: 'text-body',
    md: 'text-h6',
    lg: 'text-h5'
  };

  const colorClasses = {
    black: 'text-audiophile-black',
    white: 'text-audiophile-white-pure',
    orange: 'text-audiophile-orange'
  };

  const classes = `
    font-bold
    ${sizeClasses[size]}
    ${colorClasses[color]}
    ${className}
  `.trim();

  return <span className={classes}>{formatPrice(amount)}</span>;
};
