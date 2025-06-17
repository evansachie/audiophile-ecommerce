import { Button, Heading } from '../../ui';
import { ResponsiveImage } from '../../ui';
import type { Category } from '../../../types';

interface CategoryCardProps {
  category: Category;
  title: string;
}

export const CategoryCard = ({ category, title }: CategoryCardProps) => {

  const categoryImagePaths = {
    mobile: `/assets/shared/desktop/image-category-thumbnail-${category}.png`,
    tablet: `/assets/shared/desktop/image-category-thumbnail-${category}.png`,
    desktop: `/assets/shared/desktop/image-category-thumbnail-${category}.png`
  };

  return (
    <div className="bg-audiophile-white rounded-lg pt-20 pb-6 px-6 text-center group cursor-pointer hover:shadow-lg transition-shadow duration-300 relative flex flex-col items-center">
      <div className="absolute -top-12 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
        <ResponsiveImage
          image={categoryImagePaths}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <Heading level={6} className="mb-4 mt-4 uppercase">
        {title}
      </Heading>
      
      <Button 
        variant="tertiary"
        onClick={() => window.location.href = `/category/${category}`}
        className="group-hover:text-audiophile-orange-light"
      >
        Shop
        <span className="ml-2 text-audiophile-orange group-hover:text-audiophile-orange-light">›</span>
      </Button>
    </div>
  );
};
