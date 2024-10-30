import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  // URL do WhatsApp com mensagem personalizada incluindo o título do item
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Vim pelo site e gostaria de saber mais sobre ${title}.`)}`;

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-teal-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors flex items-center">
          Saiba mais
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default ServiceCard;