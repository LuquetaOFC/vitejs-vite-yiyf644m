import React, { useState } from 'react';
import { Globe2, Truck, Shield, Headphones, Star, ChevronRight } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Testimonial from './components/Testimonial';
import LanguageSelector from './components/LanguageSelector';
import BenefitCard from './components/BenefitCard';
import ProductTabs from './components/ProductTabs';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';

const products = {
  weightLoss: [
    {
      name: "Night Mega Burner",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1676885886.png",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 256,
      link: "https://nplink.net/s8hfhn1r?type=offer",
      description: "Night Mega Burner es un suplemento revolucionario que trabaja mientras duermes. Formulado con ingredientes naturales que aceleran el metabolismo nocturno y maximizan la quema de grasa durante el descanso.",
      fullDescription: "Night Mega Burner es la solución definitiva para quemar grasa mientras duermes. Su fórmula única contiene una mezcla especial de L-Carnitina, Té Verde y Cromo que trabajan en sinergia para: \n\n• Acelerar el metabolismo nocturno\n• Reducir el almacenamiento de grasa\n• Mejorar la calidad del sueño\n• Despertar con más energía\n\nResultados comprobados en estudios clínicos muestran una pérdida de peso hasta 3 veces mayor durante el descanso nocturno."
    },
    {
      name: "Meltamin",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1664798855.png",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 189,
      link: "https://nplink.net/76i523e8?type=offer",
      description: "Meltamin es un potente quemador de grasa que combina ingredientes termogénicos naturales para maximizar la pérdida de peso de forma segura y efectiva.",
      fullDescription: "Meltamin revoluciona la pérdida de peso con su fórmula avanzada que incluye:\n\n• Extracto de Té Verde concentrado\n• L-Carnitina purificada\n• Complejo termogénico natural\n• Vitaminas del grupo B\n\nDiseñado para:\n• Aumentar el gasto calórico\n• Reducir el apetito\n• Mantener los niveles de energía\n• Preservar la masa muscular"
    },
    {
      name: "Fat Burn Active",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1646118462.png",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 312,
      link: "https://nplink.net/d25pcoyk?type=offer",
      description: "Fat Burn Active es un suplemento de última generación que combina la ciencia más avanzada en pérdida de peso con ingredientes 100% naturales.",
      fullDescription: "Fat Burn Active representa lo último en tecnología de pérdida de peso:\n\n• Fórmula de triple acción\n• Ingredientes clinicamente probados\n• Resultados visibles en 2 semanas\n\nBeneficios principales:\n• Quema de grasa acelerada\n• Supresión del apetito natural\n• Aumento de energía sostenido\n• Mejora del rendimiento físico"
    }
  ],
  performance: [
    {
      name: "GOAT Stamina",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1666335431.png",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 423,
      link: "https://nplink.net/9heo2hyy?type=offer",
      description: "GOAT Stamina es el suplemento definitivo para maximizar tu resistencia y rendimiento físico, con una fórmula única que potencia tu energía natural.",
      fullDescription: "GOAT Stamina es el resultado de años de investigación en rendimiento deportivo:\n\n• Aumenta la resistencia física\n• Mejora la recuperación muscular\n• Optimiza los niveles de testosterona\n• Potencia el rendimiento general\n\nIngredientes premium:\n• Tribulus Terrestris\n• Maca Root\n• ZMA Complex\n• Vitaminas y minerales esenciales"
    },
    {
      name: "Bulk Extreme",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1656519402.png",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 267,
      link: "https://nplink.net/92eylzz9?type=offer",
      description: "Bulk Extreme es la solución definitiva para ganar masa muscular de forma rápida y efectiva, con una fórmula concentrada de proteínas y aminoácidos.",
      fullDescription: "Bulk Extreme es el suplemento más avanzado para ganancia muscular:\n\n• 100% proteína de suero aislada\n• Complex BCAA optimizado\n• Creatina monohidrato pura\n• Matriz de liberación prolongada\n\nBeneficios comprobados:\n• Aumento de masa muscular\n• Mejor recuperación\n• Mayor fuerza\n• Resultados visibles en 30 días"
    }
  ],
  wellness: [
    {
      name: "Cappuccino MCT",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1584523829.jpg",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.6,
      reviews: 178,
      link: "https://nplink.net/48a89ah9?type=offer",
      description: "Cappuccino MCT combina el placer del café con los beneficios de los aceites MCT para un impulso de energía y concentración duradera.",
      fullDescription: "Cappuccino MCT es la bebida perfecta para empezar tu día:\n\n• Café arábica premium\n• Aceites MCT de coco\n• Sin azúcares añadidos\n• Bajo en calorías\n\nBeneficios:\n• Energía sostenida\n• Mayor concentración\n• Apoyo al metabolismo\n• Sabor delicioso"
    },
    {
      name: "Fast Burn Extreme",
      image: "https://nutriprofits.com/src/template/backend/uploads/image_1551533266.jpg",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.7,
      reviews: 234,
      link: "https://nplink.net/fkkz9ymo?type=offer",
      description: "Fast Burn Extreme es un suplemento termogénico avanzado que combina la quema de grasa con el aumento de energía para resultados óptimos.",
      fullDescription: "Fast Burn Extreme representa la evolución en suplementos termogénicos:\n\n• Fórmula concentrada\n• Ingredientes naturales\n• Liberación gradual\n• Sin efectos secundarios\n\nBeneficios principales:\n• Quema de grasa intensiva\n• Energía duradera\n• Control del apetito\n• Mejora del metabolismo"
    }
  ]
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'faq':
        return <FAQ />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="container mx-auto text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Transforma Tu Cuerpo en Tiempo Récord
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Productos seleccionados con resultados comprobados
                </p>
                <a
                  href="#products"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Ver Productos Exclusivos
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <BenefitCard
                  icon={<Truck />}
                  title="Envío en 24h"
                  description="a España y Portugal"
                />
                <BenefitCard
                  icon={<Star />}
                  title="Productos de Alta Calidad"
                  description="Selección premium"
                />
                <BenefitCard
                  icon={<Shield />}
                  title="Pago 100% Seguro"
                  description="Transacciones protegidas"
                />
                <BenefitCard
                  icon={<Headphones />}
                  title="Soporte Dedicado"
                  description="en Español y Portugués"
                />
              </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>
                <ProductTabs products={products} />
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Testimonial
                    name="Ana García"
                    location="Barcelona, España"
                    image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                    text="Perdí 7kg en 6 semanas con Night Mega Burner. ¡Increíble!"
                    rating={5}
                  />
                  <Testimonial
                    name="Miguel Santos"
                    location="Porto, Portugal"
                    image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    text="GOAT Stamina cambió mi rutina de entrenamiento completamente."
                    rating={5}
                  />
                  <Testimonial
                    name="Carmen Rodríguez"
                    location="Madrid, España"
                    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                    text="Fat Burn Active me ayudó a alcanzar mi meta. ¡Muy satisfecha!"
                    rating={4.5}
                  />
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Nutriglow Market</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`text-gray-600 hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : ''}`}
            >
              Inicio
            </button>
            <a href="#products" className="text-gray-600 hover:text-blue-600">Productos</a>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`text-gray-600 hover:text-blue-600 ${currentPage === 'about' ? 'text-blue-600' : ''}`}
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => setCurrentPage('faq')}
              className={`text-gray-600 hover:text-blue-600 ${currentPage === 'faq' ? 'text-blue-600' : ''}`}
            >
              FAQ
            </button>
          </nav>

          <LanguageSelector />
        </div>
      </header>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Nutriglow Market</h3>
              <p className="text-gray-400">
                Tu destino para productos de calidad para una vida más saludable.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white">Inicio</button></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">Productos</a></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white">Sobre Nosotros</button></li>
                <li><button onClick={() => setCurrentPage('faq')} className="text-gray-400 hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Términos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Aviso Legal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@nutriglowmarket.com</li>
                <li className="text-gray-400">+34 900 123 456</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Nutriglow Market. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;