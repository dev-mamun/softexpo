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

    const speakers = [{
      name: 'Mr. Mustafa Jabbar',
      position: 'Ministry of Posts, Telecommunications & Information',
      detail: 'Mustafa Jabbar is well-known to the people of Bangladesh and Bengali speaking people of the world for his milestone works.',
      image: 'images/s1.jpg',
    }, {
      name: 'Mr. Ayman Sadiq',
      position: 'Founder and CEO "10 Minute School"',
      detail: 'Ayman Sadiq is the founder & CEO of 10 Minute School. This is the largest online education platform in Bangladesh.',
      image: 'images/s2.jpg',
    }, {
      name: 'Ms. Rezwana Khan',
      position: 'President of Bangladesh Women in Technology (BWIT)',
      detail: 'Ms. Rezwana Khan is a Managing Director & CEOo of Star Computer Systems Limited.',
      image: 'images/s3.jpg',
    }, {
      name: 'Dr. Lafifa Jamal',
      position: 'Professor, Department of Robotics and Mechatronics Engineering University of Dhaka',
      detail: 'Dr. Lafifa Jamal is a Professor of the Department of Robotics and Mechatronics Engineering, University of Dhaka.',
      image: 'images/s4.jpg',
    }, {
      name: 'Dr. Rubana Huq',
      position: 'Vice Chancellor of Asian University for Women',
      detail: 'Dr. Rubana Huq is a businesswoman, a poet, a motivational speaker and currently the Vice Chancellor of Asian University for Women.',
      image: 'images/s5.jpg',
    }, {
      name: 'K.M. Tariquzzaman',
      position: 'Chief Technology Officer Summit Communications Ltd',
      detail: 'Experienced in Network Operations for Core and Intelligent Network in Mobile Network Operations.',
      image: 'images/s6.jpg',
    }];

    speakers.forEach((item) => {
      const parent = document.getElementById('items');
      if (parent !== null) {
        const speaker = `<article class="speaker">
                <div class="speaker_image">
                    <img class="photo" src="${item.image}" alt="${item.name}">
                </div>
                <div class="info">
                    <h3 class="name">${item.name}</h3>
                    <p class="position">${item.position}</p>
                    <hr>
                    <p class="detail">${item.detail}</p>
                </div>
            </article>`;
        parent.insertAdjacentHTML('beforeend', speaker);
      }
    });

    const more = document.getElementById('more');
    if (more !== null) {
      const speaker = document.querySelectorAll('.speaker');
      more.addEventListener('click', (e) => {
        e.target.style.display = 'none';
        speaker.forEach((e) => {
          e.style.display = 'flex';
        });
      });
    }
  }
};