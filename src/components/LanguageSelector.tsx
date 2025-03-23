import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState('es');

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-gray-600" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent text-gray-600 focus:outline-none"
      >
        <option value="es">Español</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default LanguageSelector;