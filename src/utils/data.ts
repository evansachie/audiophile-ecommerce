import { Product, Category, ProductFilters } from '@/types';
import productsData from '../data.json';

// Helper function to fix relative image paths
const fixImagePaths = (product: Product): Product => {
  // Clone the product to avoid mutating the original
  const fixedProduct = { ...product };
  
  // Fix main image paths
  if (fixedProduct.image) {
    fixedProduct.image = {
      mobile: fixedProduct.image.mobile.replace('./', '/'),
      tablet: fixedProduct.image.tablet.replace('./', '/'),
      desktop: fixedProduct.image.desktop.replace('./', '/'),
    };
  }

  // Fix category image paths
  if (fixedProduct.categoryImage) {
    fixedProduct.categoryImage = {
      mobile: fixedProduct.categoryImage.mobile.replace('./', '/'),
      tablet: fixedProduct.categoryImage.tablet.replace('./', '/'),
      desktop: fixedProduct.categoryImage.desktop.replace('./', '/'),
    };
  }

  // Fix gallery image paths
  if (fixedProduct.gallery) {
    fixedProduct.gallery = {
      first: {
        mobile: fixedProduct.gallery.first.mobile.replace('./', '/'),
        tablet: fixedProduct.gallery.first.tablet.replace('./', '/'),
        desktop: fixedProduct.gallery.first.desktop.replace('./', '/'),
      },
      second: {
        mobile: fixedProduct.gallery.second.mobile.replace('./', '/'),
        tablet: fixedProduct.gallery.second.tablet.replace('./', '/'),
        desktop: fixedProduct.gallery.second.desktop.replace('./', '/'),
      },
      third: {
        mobile: fixedProduct.gallery.third.mobile.replace('./', '/'),
        tablet: fixedProduct.gallery.third.tablet.replace('./', '/'),
        desktop: fixedProduct.gallery.third.desktop.replace('./', '/'),
      },
    };
  }

  // Fix related product image paths
  if (fixedProduct.others) {
    fixedProduct.others = fixedProduct.others.map(other => ({
      ...other,
      image: {
        mobile: other.image.mobile.replace('./', '/'),
        tablet: other.image.tablet.replace('./', '/'),
        desktop: other.image.desktop.replace('./', '/'),
      }
    }));
  }

  return fixedProduct;
};

export const getAllProducts = (): Product[] => {
  return (productsData as Product[]).map(fixImagePaths);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  const product = getAllProducts().find(product => product.slug === slug);
  return product;
};

export const getProductById = (id: number): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return getAllProducts().filter(product => product.category === category);
};

export const getNewProducts = (): Product[] => {
  return getAllProducts().filter(product => product.new);
};

export const getFeaturedProducts = (limit: number = 3): Product[] => {
  return getAllProducts()
    .sort((a, b) => b.price - a.price)
    .slice(0, limit);
};

export const getRelatedProducts = (currentProduct: Product, limit: number = 3): Product[] => {
  return getAllProducts()
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllProducts().filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProducts = (filters: ProductFilters): Product[] => {
  let filteredProducts = getAllProducts();

  if (filters.category) {
    filteredProducts = filteredProducts.filter(product => product.category === filters.category);
  }

  if (filters.isNew !== undefined) {
    filteredProducts = filteredProducts.filter(product => product.new === filters.isNew);
  }

  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter(product => 
      product.price >= filters.priceRange!.min && 
      product.price <= filters.priceRange!.max
    );
  }

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filteredProducts.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }
  }

  return filteredProducts;
};

export const getCategoriesWithCounts = () => {
  const products = getAllProducts();
  const categories = ['headphones', 'speakers', 'earphones'] as Category[];
  
  return categories.map(category => ({
    category,
    count: products.filter(product => product.category === category).length,
    products: products.filter(product => product.category === category),
  }));
};
