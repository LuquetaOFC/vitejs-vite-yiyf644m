import React from 'react';
import { Star, Clock } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  link,
}) => {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-contain p-4" 
          style={{
            backgroundColor: '#f8f9fa',
          }}
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          -{discount}%
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-blue-600">{price.toFixed(2)}€</span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              {originalPrice.toFixed(2)}€
            </span>
          </div>
        </div>

        <div className="flex items-center text-orange-500 text-sm mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>¡Oferta por tiempo limitado!</span>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Comprar Ahora
        </a>
      </div>
    </div>
  );
};

export default ProductCard;