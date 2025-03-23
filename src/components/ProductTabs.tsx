import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  link: string;
  description: string;
  fullDescription: string;
}

interface ProductsData {
  weightLoss: Product[];
  performance: Product[];
  wellness: Product[];
}

interface ProductTabsProps {
  products: ProductsData;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ products }) => {
  const [activeTab, setActiveTab] = useState('weightLoss');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const tabs = [
    { id: 'weightLoss', label: 'Pérdida de Peso' },
    { id: 'performance', label: 'Rendimiento' },
    { id: 'wellness', label: 'Bienestar' },
  ];

  const toggleDescription = (productName: string) => {
    if (expandedProduct === productName) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productName);
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products[activeTab as keyof ProductsData].map((product) => (
          <div key={product.name} className="space-y-4">
            <ProductCard {...product} />
            <div className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-700">
                {expandedProduct === product.name
                  ? product.fullDescription
                  : product.description}
              </p>
              <button
                onClick={() => toggleDescription(product.name)}
                className="mt-2 text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                {expandedProduct === product.name ? 'Ver menos' : 'Ver más'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;