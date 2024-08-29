const swiperEl = document.querySelector('swiper-container');

const imageSources = Array(15).fill('/resources/img/stone.svg');

imageSources.forEach(src => {
  const swiperSlide = document.createElement('swiper-slide');
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Image";
  
  swiperSlide.appendChild(img);
  swiperEl.appendChild(swiperSlide);
});

const params = {
   injectStyles: [`
   .swiper-pagination-current,
   .swiper-pagination-total,
   .custom-separator {
      color: #FFFFFF;
      font-family: 'TT Hoves Pro Regular',
   }
    .swiper-pagination-fraction {
      background: #141416;
      opacity: .8;
      width: 20vw;
      padding: 1.2vh 1.2vh;
      border-radius: 130px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    `],
  pagination: {
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' 
      + '<span class="custom-separator"> из </span>' 
      + '<span class="' + totalClass + '"></span>';
  },
  },
}

Object.assign(swiperEl, params)

swiperEl.initialize();