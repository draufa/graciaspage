import React from 'react';
import { Check, Mail, Home } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
        <div className="bg-[#1877F2] p-6 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
            <Check className="h-10 w-10 text-[#1877F2]" />
          </div>
        </div>
        
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            ¡Gracias por tu compra!
          </h1>
          
          <p className="text-center text-gray-600 mb-8">
            En unos instantes deberías recibir el acceso en tu correo electrónico.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 flex items-center mb-8">
            <Mail className="h-6 w-6 text-[#1877F2] mr-3 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              Si no lo encuentras, revisa tu carpeta de spam o promociones.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button 
              className="px-6 py-3 bg-[#1877F2] text-white rounded-lg font-medium hover:bg-[#1565D1] transition-colors duration-200 flex items-center"
            >
              <Home className="h-4 w-4 mr-2" />
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;