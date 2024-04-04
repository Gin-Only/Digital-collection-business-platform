// src/components/OriginalityCheck.jsx
import React, { useContext } from 'react';
import { OriginalityCheckContext } from '../contexts/OriginalityCheckContext';

const OriginalityCheck = () => {
  const { formData, handleInputChange, handleSubmit } = useContext(OriginalityCheckContext);

  return (
    <div>
      <h1>作品原创性审核</h1>
      <form onSubmit={handleSubmit}>
        <label>
          作品名称：
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <button type="submit">提交审核</button>
      </form>
    </div>
  );
};

export default OriginalityCheck;
