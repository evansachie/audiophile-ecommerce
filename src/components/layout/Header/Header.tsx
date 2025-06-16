import { useState } from 'react';
import { Container } from '../../ui';
import { HamburgerIcon } from '../../icons/HamburgerIcon';
import { Navigation } from './Navigation';
import { CartIcon } from './CartIcon';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';

interface HeaderProps {
  cartItemCount?: number;
  currentPath?: string;
  onCartClick?: () => void;
}

export const Header = ({ 
  cartItemCount = 0, 
  currentPath = '/',
  onCartClick 
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-audiophile-black border-b border-gray-800 sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2 hover:text-audiophile-orange transition-colors duration-200 z-50"
              onClick={handleMobileMenuToggle}
              aria-label="Open menu"
              type="button"
            >
              <HamburgerIcon className="w-4 h-4" />
            </button>

            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <Navigation currentPath={currentPath} />
            </div>

            {/* Cart Icon */}
            <div className="flex-shrink-0 lg:flex-1 lg:justify-end flex justify-end">
              <CartIcon 
                itemCount={cartItemCount} 
                onClick={onCartClick}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />
    </>
  );
};
