import { Link } from 'react-router-dom';
import { Button, Heading, Text, Badge, ResponsiveImage } from '../../ui';
import type { Product } from '../../../types';

interface ProductCardProps {
  product: Product;
  imagePosition: 'left' | 'right';
}

export const ProductCard = ({ product, imagePosition }: ProductCardProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className="bg-audiophile-white-light py-16 md:py-24">
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isImageLeft ? '' : 'lg:grid-flow-col-dense'}`}>
        {/* Product Image */}
        <div className={`rounded-lg p-8 ${isImageLeft ? '' : 'lg:order-2'}`}>
          <ResponsiveImage
            image={product.categoryImage}
            alt={product.name}
            className="w-full h-80 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className={`text-center lg:text-left ${isImageLeft ? '' : 'lg:order-1'}`}>
          {product.new && (
            <Badge variant="new" className="text-audiophile-orange mb-4 md:mb-6 block">
              NEW PRODUCT
            </Badge>
          )}
          
          <Heading level={2} className="mb-6 md:mb-8">
            {product.name}
          </Heading>
          
          <Text color="gray" className="mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
            {product.description}
          </Text>
          
          <Link to={`/product/${product.slug}`}>
            <Button variant="primary">
              See Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
