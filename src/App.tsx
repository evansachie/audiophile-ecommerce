import { getAllProducts } from './utils/data';
import { formatPrice } from './utils/formatters';

function App() {
  const products = getAllProducts();
  const featuredProduct = products[0]; // Get first product for demo

  return (
    <div className="min-h-screen bg-audiophile-white-light font-manrope">
      {/* Header Demo */}
      <header className="bg-audiophile-black text-audiophile-white-pure py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-h2 text-center">Audiophile</h1>
        </div>
      </header>

      {/* Design System Demo */}
      <main className="container mx-auto px-6 py-12">
        <section className="mb-12">
          <h2 className="text-h3 text-audiophile-black mb-8 text-center">
            Design System Demo
          </h2>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-tertiary">
              Tertiary Button
              <span>→</span>
            </button>
          </div>

          {/* Typography */}
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-h1 text-audiophile-black mb-4">H1 Heading</h1>
            <h2 className="text-h2 text-audiophile-black mb-4">H2 Heading</h2>
            <h3 className="text-h3 text-audiophile-black mb-4">H3 Heading</h3>
            <p className="text-body text-gray-600 mb-4">
              This is body text demonstrating the Manrope font family with proper line height and spacing.
            </p>
            <p className="text-overline text-audiophile-orange mb-4">OVERLINE TEXT</p>
            <p className="text-subtitle text-audiophile-black">SUBTITLE TEXT</p>
          </div>

          {/* Form Elements */}
          <div className="max-w-md mx-auto mb-8">
            <input 
              type="text" 
              placeholder="Input Field" 
              className="input-field mb-4"
            />
            <div className="radio-field mb-4">
              <input type="radio" id="radio1" name="demo" />
              <label htmlFor="radio1" className="text-body font-bold">Radio Option</label>
            </div>
            <div className="number-input">
              <button>-</button>
              <input type="number" value="1" readOnly />
              <button>+</button>
            </div>
          </div>
        </section>

        {/* Product Demo */}
        {featuredProduct && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-h3 text-audiophile-black mb-8 text-center">
              Product Data Demo
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={featuredProduct.image.desktop} 
                    alt={featuredProduct.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  {featuredProduct.new && (
                    <p className="text-overline text-audiophile-orange mb-4">NEW PRODUCT</p>
                  )}
                  <h3 className="text-h4 text-audiophile-black mb-4">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-body text-gray-600 mb-6">
                    {featuredProduct.description}
                  </p>
                  <p className="text-h6 text-audiophile-black mb-6">
                    {formatPrice(featuredProduct.price)}
                  </p>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Stats */}
        <section className="mt-12 text-center">
          <p className="text-body text-gray-600">
            Project Structure Complete: <span className="text-audiophile-orange font-bold">{products.length} Products Loaded</span>
          </p>
          <p className="text-subtitle text-audiophile-black mt-2">
            Ready for Component Development! 🎉
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
