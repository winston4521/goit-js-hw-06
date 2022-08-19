const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEL = document.querySelector('.gallery');

// const createImageElement = ({ url, alt }) => {
//   const liEL = document.createElement('li');
//   liEL.classList.add('li_item');
//   const imgEL = document.createElement('img');
//   imgEL.src = url;
//   imgEL.alt = alt;
//   liEL.appendChild(imgEL);
//   return liEL;
// };

// const elements = images.map(createImageElement);
// galleryEL.append(...elements);
// console.log(galleryEL);

const createImageElements = images
  .map(image => `<li class="li_item"><img src=${image.url} alt=${image.alt}></li>`)
  .join(' ');

galleryEL.insertAdjacentHTML('afterbegin', createImageElements);
console.log(galleryEL);
