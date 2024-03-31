// src/contexts/OriginalityCheckContext.jsx
import { createContext, useState } from 'react';

const OriginalityCheckContext = createContext();

const OriginalityCheckProvider = ({ children }) => {
  const [formData, setFormData] = useState({ title: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 调用作品原创性审核相关的API请求函数
  };

  return (
    <OriginalityCheckContext.Provider value={{ formData, handleInputChange, handleSubmit }}>
      {children}
    </OriginalityCheckContext.Provider>
  );
};

export { OriginalityCheckContext, OriginalityCheckProvider };
