import React from 'react';
import { Award, Users, CheckCircle, Globe2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expertos en nutrición y suplementación, comprometidos con tu bienestar y resultados
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
            <p className="text-gray-600 mb-6">
              Fundada en 2021 por el Dr. Miguel Sánchez, Nutriglow Market nació de la visión de 
              revolucionar el mercado de suplementos en España y Portugal. Con sede en Barcelona 
              y presencia en Lisboa, nos hemos convertido en el referente de productos de calidad 
              y resultados comprobados.
            </p>
            <p className="text-gray-600">
              Nuestra misión es simple pero poderosa: conectar a las personas con los mejores 
              suplementos del mercado, garantizando calidad, seguridad y resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Dr. Miguel Sánchez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Dr. Miguel Sánchez</h3>
              <p className="text-gray-600">Fundador y Nutricionista</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Dra. Ana Oliveira"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Dra. Ana Oliveira</h3>
              <p className="text-gray-600">Especialista en Nutrición Deportiva</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Carlos Martínez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Carlos Martínez</h3>
              <p className="text-gray-600">Entrenador Personal</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Laura Gómez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Laura Gómez</h3>
              <p className="text-gray-600">Atención al Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Calidad Certificada</h3>
              <p className="text-gray-600">Productos certificados por la UE y laboratorios europeos</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Asesoramiento Experto</h3>
              <p className="text-gray-600">Equipo de profesionales cualificados a tu disposición</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Resultados Garantizados</h3>
              <p className="text-gray-600">Productos seleccionados por su eficacia comprobada</p>
            </div>
            <div className="text-center">
              <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Atención Bilingüe</h3>
              <p className="text-gray-600">Soporte en español y portugués</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Descubre Nuestra Selección de Productos
          </h2>
          <a
            href="#products"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Ver Productos
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;