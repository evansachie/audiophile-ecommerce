import { useState } from 'react';
import { Container, Badge, Heading, Text, Button, NumberInput, ResponsiveImage } from '../../ui';
import type { Product } from '../../../types';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, quantity });
    // Will be connected to cart context later
  };

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="bg-audiophile-white-light rounded-lg p-8">
            <ResponsiveImage
              image={product.image}
              alt={product.name}
              className="w-full max-h-[400px] object-contain"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            {product.new && (
              <Badge variant="new" className="text-audiophile-orange mb-4 md:mb-6 block">
                NEW PRODUCT
              </Badge>
            )}
            
            <Heading level={2} className="mb-6 md:mb-8">
              {product.name}
            </Heading>
            
            <Text color="gray" className="mb-8">
              {product.description}
            </Text>
            
            <div className="mb-6">
              <p className="text-h6 font-bold">${product.price}</p>
            </div>
            
            {/* Add to Cart Actions */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="w-32">
                <NumberInput
                  value={quantity}
                  onChange={setQuantity}
                  min={1}
                  max={10}
                />
              </div>
              
              <Button 
                variant="primary"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
