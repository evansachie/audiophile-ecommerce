import { Link } from 'react-router-dom';
import { Button, Heading } from '../../ui';
import { ResponsiveImage } from '../../ui';
import { getProductBySlug } from '../../../utils/data';

export const YX1Earphones = () => {
  const product = getProductBySlug('yx1-earphones');
  
  if (!product) return null;

  const earphonesImage = {
    mobile: '/assets/home/mobile/image-earphones-yx1.jpg',
    tablet: '/assets/home/tablet/image-earphones-yx1.jpg',
    desktop: '/assets/home/desktop/image-earphones-yx1.jpg'
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <ResponsiveImage
          image={earphonesImage}
          alt="YX1 Earphones"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-audiophile-white rounded-lg p-8 lg:p-16 flex items-center">
        <div>
          <Heading level={4} className="mb-8">
            YX1 Earphones
          </Heading>
          
          <Link to={`/product/${product.slug}`}>
            <Button variant="secondary">
              See Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
