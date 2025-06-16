import { Container } from '../../ui';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="relative bg-white">
        <Container>
          <nav className="py-8">
            <div className="space-y-8">
              <a 
                href="/" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200"
                onClick={onClose}
              >
                HOME
              </a>
              <a 
                href="/headphones" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200"
                onClick={onClose}
              >
                HEADPHONES
              </a>
              <a 
                href="/speakers" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200"
                onClick={onClose}
              >
                SPEAKERS
              </a>
              <a 
                href="/earphones" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200"
                onClick={onClose}
              >
                EARPHONES
              </a>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};
