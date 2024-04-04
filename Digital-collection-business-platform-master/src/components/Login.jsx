import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>登录</h1>
      <form>
        <label>用户名：<input type="text" /></label>
        <label>密码：<input type="password" /></label>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;


