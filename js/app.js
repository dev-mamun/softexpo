/**
 * Project: softexpo
 * File: app.js
 * Created: 2/14/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 */

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('show');
      body.classList.toggle('disable-scroll');
      html.classList.toggle('disable-scroll');
    });
  }
};