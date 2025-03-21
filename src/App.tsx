import React, { useState, useEffect } from 'react';
import { Star, Check, Timer, ShieldCheck, Truck, Package, ArrowRight } from 'lucide-react';

function CountdownTimer() {
  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex gap-2 items-center justify-center">
      <Timer className="w-6 h-6 text-red-600" />
      <span className="text-2xl font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50 md:hidden">
        <a
          href="https://entrega.logzz.com.br/pay/memx0rv4m/rcbiv-oferta-6"
          className="block w-full bg-red-600 text-white text-center py-4 rounded-lg font-bold text-lg animate-pulse"
        >
          GARANTA O SEU AGORA!
        </a>
      </div>

      {/* Flash Sale Header */}
      <div className="bg-black text-white py-6 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">⚡ OFERTA RELÂMPAGO! ⚡</h2>
          <CountdownTimer />
          <p className="mt-2 text-yellow-400">Corra! Você tem apenas 15 minutos para garantir seu desconto exclusivo!</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-red-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_995087-MLB82275507183_022025-O-maquina-de-cortar-cabelo-fazer-barba-acabamento-drago.webp"
                alt="Barbeador Dragão"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Barbeador Dragão</h1>
              <p className="text-xl mb-6">
                Imagine ter um visual impecável sem precisar sair de casa. O Barbeador Dragão oferece cortes precisos,
                práticos e sem falhas, garantindo um estilo profissional em minutos!
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-400" />
                  <span>Design ergonômico premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-400" />
                  <span>Lâminas de aço inoxidável</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-400" />
                  <span>Pentes ajustáveis profissionais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefícios Exclusivos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12 text-red-600" />,
                title: 'Precisão Profissional',
                description: 'Lâminas afiadas para cortes perfeitos',
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-red-600" />,
                title: 'Segurança Garantida',
                description: 'Design que evita cortes e irritações',
              },
              {
                icon: <Truck className="w-12 h-12 text-red-600" />,
                title: 'Entrega Expressa',
                description: 'Receba em até 24 horas',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg bg-gray-50">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Escolha seu Pacote</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white text-gray-900 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">1 Unidade</h3>
              <div className="mb-4">
                <span className="text-gray-500 line-through">R$149,99</span>
                <div className="text-4xl font-bold text-red-600">R$99,99</div>
                <span className="text-green-600">Economize R$50,00</span>
              </div>
              <a
                href="https://entrega.logzz.com.br/pay/memx0rv4m/rcbiv-oferta-6"
                className="block w-full bg-red-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
              >
                COMPRAR AGORA
              </a>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-8 shadow-xl border-4 border-yellow-400">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-lg font-bold">
                MAIS VENDIDO
              </div>
              <h3 className="text-2xl font-bold mb-4">2 Unidades</h3>
              <div className="mb-4">
                <span className="text-gray-500 line-through">R$299,98</span>
                <div className="text-4xl font-bold text-red-600">R$219,98</div>
                <span className="text-green-600">Economize R$80,00</span>
              </div>
              <a
                href="https://entrega.logzz.com.br/pay/memx0rv4m/rcbiv-oferta-6"
                className="block w-full bg-red-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'João P.',
                image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                text: 'Nunca mais gastei dinheiro no barbeiro! Faço tudo em casa e fica perfeito!',
              },
              {
                name: 'Ricardo M.',
                image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80',
                text: 'Qualidade impressionante! O melhor barbeador que já usei.',
              },
              {
                name: 'Pedro S.',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80',
                text: 'Praticidade e economia juntas. Super recomendo!',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🚨 ÚLTIMAS UNIDADES! 🚨</h2>
          <p className="text-xl mb-8">Aproveite antes que o desconto acabe!</p>
          <a
            href="https://entrega.logzz.com.br/pay/memx0rv4m/rcbiv-oferta-6"
            className="inline-block bg-yellow-400 text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition"
          >
            COMPRAR AGORA
          </a>
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <Package className="w-6 h-6" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              <span>Pagamento na Entrega</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;