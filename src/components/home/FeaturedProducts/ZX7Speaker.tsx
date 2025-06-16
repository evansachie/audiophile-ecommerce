import { Button, Heading } from '../../ui';
import { getProductBySlug } from '../../../utils/data';

export const ZX7Speaker = () => {
  const product = getProductBySlug('zx7-speaker');
  
  if (!product) return null;

  const backgroundImage = {
    mobile: './assets/home/mobile/image-speaker-zx7.jpg',
    tablet: './assets/home/tablet/image-speaker-zx7.jpg',
    desktop: './assets/home/desktop/image-speaker-zx7.jpg'
  };

  return (
    <div 
      className="rounded-lg p-8 lg:p-16 h-80 flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage.desktop})`
      }}
    >
      <div>
        <Heading level={4} className="mb-8">
          ZX7 Speaker
        </Heading>
        
        <Button 
          variant="secondary"
          onClick={() => window.location.href = `/product/${product.slug}`}
        >
          See Product
        </Button>
      </div>
    </div>
  );
};
