import { Product, Category, ProductFilters } from '@/types';
import productsData from '../data.json';

export const getAllProducts = (): Product[] => {
  return productsData as Product[];
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return getAllProducts().find(product => product.slug === slug);
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
