import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Shield, Brain, Sparkles, Calendar, Home, Phone, Mail, Clock, MapPin, Lock, CheckCircle2, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import TestimonialCard from './components/TestimonialCard';
import ServiceCard from './components/ServiceCard';
import BenefitCard from './components/BenefitCard';
import { motion } from 'framer-motion';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Você pode ajustar o threshold conforme necessário
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-teal-600" />
              <span className="text-xl font-semibold text-gray-800">Psicóloga Francismari Leocádio</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-teal-600 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="início" className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Encontre equilíbrio e bem-estar emocional
              </h1>
              <p className="text-lg text-gray-600">
                Bem-vindo ao <strong>seu espaço</strong>. Aqui você encontra apoio e orientação profissional para sua jornada de autoconhecimento e desenvolvimento pessoal.
              </p>
              <a href="https://wa.me/5511999999999"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                <MessageSquare className="w-5 h-5 mr-2" />
                Agende sua consulta
              </a>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Psicóloga Francismari Leocádio"
                style={{ width: '300px', height: 'auto' }} // Definindo uma largura fixa
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Benefícios da Terapia Online
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Home />}
              title="Conforto e Conveniência"
              description="Sessões no ambiente acolhedor da sua casa"
            />
            <BenefitCard
              icon={<Clock />}
              title="Flexibilidade de Horários"
              description="Mais opções para se adequar à sua rotina"
            />
            <BenefitCard
              icon={<MapPin />}
              title="Acessibilidade"
              description="Atendimento de qualquer lugar do país"
            />
            <BenefitCard
              icon={<Lock />}
              title="Privacidade Total"
              description="Ambiente seguro e confidencial"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" ref={aboutRef} className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -500 }} // Começa fora da tela
              animate={{ opacity: 1, x: 0 }} // Move para a posição final
              transition={{ duration: 3.5 }} // Duração da animação
            >
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80"
                alt="Psicóloga Francismari em seu consultório"
                style={{ width: '400px', height: 'auto' }} // Definindo uma largura fixa
                className="rounded-lg shadow-xl mx-auto object-cover"
              />
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 500 }} // Começa fora da tela
              animate={{ opacity: 1, x: 0 }} // Move para a posição final
              transition={{ duration: 3.5 }} // Duração da animação
            >
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Sobre Mim</h2>
                <p className="text-gray-600">
                  Sou especializada em Terapia Cognitivo-Comportamental e Psicologia Positiva. Minha abordagem é centrada na pessoa, buscando compreender cada indivíduo em sua totalidade.
                </p>
                <p className="text-gray-600">
                  Acredito que cada pessoa tem um potencial único para crescimento e transformação. Meu papel é facilitar esse processo de autodescobrimento e desenvolvimento pessoal.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span>Graduação em Psicologia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span>Especialização em Terapia Cognitivo-Comportamental</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span>Especialização em Análise do Comportamento Aplicada</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Tratamento de Ansiedade"
              description="Auxílio no manejo da ansiedade, ataques de pânico e fobias, desenvolvendo estratégias eficazes de enfrentamento."
              icon={<Shield />}
            />
            <ServiceCard
              title="Tratamento da Depressão"
              description="Suporte terapêutico para superar a depressão, recuperar a motivação e reconstruir uma vida mais significativa."
              icon={<Brain />}
            />
            <ServiceCard
              title="Terapia Individual"
              description="Atendimento personalizado para auxiliar no seu desenvolvimento pessoal e bem-estar emocional."
              icon={<MessageCircle />}
            />
            <ServiceCard
              title="Autoconhecimento"
              description="Processo de descoberta pessoal para compreender melhor seus pensamentos, emoções e comportamentos."
              icon={<Sparkles />}
            />
            <ServiceCard
              title="Terapia de Casal"
              description="Apoio especializado para fortalecer relacionamentos e superar desafios em conjunto."
              icon={<Heart />}
            />
            <ServiceCard
              title="Orientação Vocacional"
              description="Auxílio na descoberta do seu caminho profissional e tomada de decisões importantes."
              icon={<Calendar />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Depoimentos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              text="A terapia online com a Psicóloga Francismari mudou minha vida. Sua abordagem acolhedora me ajudou a superar momentos difíceis."
              name="Maria Silva"
              role="Professora"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              text="Excelente profissional! As sessões online são muito práticas e a qualidade do atendimento é excepcional."
              name="João Santos"
              role="Empresário"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              text="A flexibilidade das consultas online facilitou muito minha vida. A Psicóloga Francismari é uma profissional extraordinária."
              name="Ana Oliveira"
              role="Designer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              text="A Psicóloga Francismari tem uma abordagem incrível, que realmente me ajudou a encontrar paz e equilíbrio nas minhas rotinas diárias."
              name="Carlos Almeida"
              role="Engenheiro"
              image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              text="Me senti acolhida desde a primeira sessão. As consultas online são eficientes e muito confortáveis. Recomendo a todos!"
              name="Fernanda Lima"
              role="Arquiteta"
              image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              text="A experiência tem sido transformadora. A Psicóloga Francismari sempre tem a abordagem certa para cada situação. A terapia online me proporcionou mais autonomia."
              name="Pedro Martins"
              role="Analista de Sistemas"
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              text="Foi a melhor decisão que tomei. A terapia online com a Psicóloga Francismari tem me ajudado a superar medos e desafios com muito suporte e acolhimento."
              name="Juliana Souza"
              role="Advogada"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-gray-800">Entre em Contato</h2>
              <p className="text-gray-600">
                Estou aqui para ajudar você em sua jornada de autoconhecimento e desenvolvimento pessoal. Entre em contato para agendar sua consulta ou tirar dúvidas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span>contato@drasofia.com.br</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-teal-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-teal-400" />
                <span className="text-xl font-semibold">Psicóloga Francismari Leocádio</span>
              </div>
              <p className="text-gray-400">
                CRP: 06/123456
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-teal-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
              <p className="text-gray-400">
                Segunda a Sexta: 8h às 20h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 - Psicóloga Francismari Leocádio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de saber mais sobre o atendimento online."
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contato via WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

export default App;