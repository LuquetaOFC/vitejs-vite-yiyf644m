import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Productos y Compras",
      items: [
        {
          question: "¿Cómo funciona el proceso de compra?",
          answer: "Nuestro sistema te redirige directamente al fabricante oficial del producto. Esto garantiza:\n\n• Producto 100% original\n• Garantía del fabricante\n• Mejor precio disponible\n• Envío directo y seguro"
        },
        {
          question: "¿Por qué no tienen carrito propio?",
          answer: "Trabajamos con un modelo de afiliación que nos permite ofrecer los mejores precios y garantías directamente de los fabricantes. Esto asegura que recibas el producto original con todas las garantías oficiales."
        },
        {
          question: "¿Puedo usar el cupón QUEMAGRASA15?",
          answer: "¡Sí! El cupón QUEMAGRASA15 te ofrece un 15% de descuento adicional en tu primera compra. Simplemente ingrésalo durante el proceso de pago en la web del fabricante."
        }
      ]
    },
    {
      title: "Envíos y Entregas",
      items: [
        {
          question: "¿Cuáles son los plazos de entrega?",
          answer: (
            <div>
              <p className="mb-2">Los plazos de entrega varían según tu ubicación:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>España peninsular: 24-48h</li>
                <li>Islas Baleares: 2-3 días</li>
                <li>Islas Canarias: 3-5 días</li>
                <li>Portugal continental: 2-4 días</li>
                <li>Madeira y Azores: 4-7 días</li>
              </ul>
            </div>
          )
        },
        {
          question: "¿Cómo puedo rastrear mi pedido?",
          answer: "Recibirás un email con el número de seguimiento una vez que tu pedido sea despachado. Podrás rastrear tu envío a través del enlace proporcionado en el email."
        }
      ]
    },
    {
      title: "Pagos y Seguridad",
      items: [
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: (
            <div>
              <p className="mb-2">Aceptamos diversos métodos de pago seguros:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tarjetas de crédito/débito</li>
                <li>PayPal</li>
                <li>Bizum (España)</li>
                <li>MB Way (Portugal)</li>
                <li>Transferencia bancaria</li>
              </ul>
            </div>
          )
        },
        {
          question: "¿Es seguro comprar en su sitio?",
          answer: "Todas las transacciones se realizan a través de conexiones SSL encriptadas y en las plataformas oficiales de los fabricantes, cumpliendo con los más altos estándares de seguridad y el RGPD."
        }
      ]
    },
    {
      title: "Devoluciones y Garantías",
      items: [
        {
          question: "¿Cuál es la política de devolución?",
          answer: "Todos nuestros productos tienen una garantía de devolución entre 14 y 30 días, dependiendo del fabricante. Si no estás satisfecho, puedes solicitar un reembolso completo."
        },
        {
          question: "¿Qué hago si recibo un producto dañado?",
          answer: "En el improbable caso de recibir un producto dañado, contacta inmediatamente con nuestro servicio de atención al cliente. Gestionaremos el reemplazo o reembolso sin costes adicionales."
        }
      ]
    },
    {
      title: "Contacto y Soporte",
      items: [
        {
          question: "¿Cómo puedo contactar con atención al cliente?",
          answer: (
            <div>
              <p className="mb-2">Puedes contactarnos a través de:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email: support@nutriglowmarket.com</li>
                <li>Teléfono: +34 900 123 456</li>
                <li>WhatsApp: +34 600 123 456</li>
                <li>Formulario de contacto en nuestra web</li>
              </ul>
              <p className="mt-2">Horario de atención: Lunes a Viernes de 9:00 a 18:00 (hora peninsular)</p>
            </div>
          )
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Encuentra respuestas a todas tus dudas sobre nuestros productos y servicios
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const index = categoryIndex * 100 + itemIndex;
                  return (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => toggleItem(index)}
                      >
                        <span className="font-semibold">{item.question}</span>
                        {openItem === index ? (
                          <ChevronUp className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-blue-600" />
                        )}
                      </button>
                      {openItem === index && (
                        <div className="px-6 py-4 bg-gray-50 whitespace-pre-line">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h2>
          <p className="text-gray-600 mb-8">
            Nuestro equipo de atención al cliente está disponible para ayudarte
          </p>
          <a
            href="mailto:support@nutriglowmarket.com"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;