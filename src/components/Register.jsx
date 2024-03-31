import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>注册</h1>
      <form>
        <label>用户名：<input type="text" /></label>
        <label>密码：<input type="password" /></label>
        <label>确认密码：<input type="password" /></label>
        <button type="submit">注册</button>
      </form>
    </div>
  );
};

export default Register;


