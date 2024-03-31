import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="网站Logo" />
      <nav>
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="/collections">藏品分类</a></li>
          <li><a href="/cart">购物车</a></li>
          <li><a href="/login">登录</a></li>
          <li><a href="/register">注册</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


