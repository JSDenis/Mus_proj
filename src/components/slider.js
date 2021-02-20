//const dots = document.querySelector('.items__button');



const moveSlide = (indexItem = 0, triggerBlock, widthItem = 0) => {
  document.querySelector(triggerBlock).style.transform = `translate3d(${widthItem - (920 * indexItem)}px, 0, 0)`; /* 300-(5*920); */
}

const putActiveDot = () => {
  let activeIndex = 0;
  const items = document.querySelectorAll('.items__button li')

  items.forEach((item, index) => {
    if (item.classList.contains('dot__active')) {
      activeIndex = index;
    }
  })

  return activeIndex + 1;
}

const getActiveSlide = () => {
  const allWidth = document.body.clientWidth;
  const activeDot = putActiveDot();
  let result = 0;

  result = (allWidth - 920) / 2;

  moveSlide(activeDot, '.all__items', result);
}

const putActiveSlide = (nextActive) => {
  const imageItems = document.querySelectorAll('.all__items .item__photo');

  imageItems.forEach((image, index) => {
    if (image.classList.contains('active__item')) {
      image.classList.remove('active__item')
    }

    if (image.classList.contains('prev__item')) {
      image.classList.remove('prev__item')
    }

    if (image.classList.contains('next__item')) {
      image.classList.remove('next__item')
    }
  })

  imageItems[nextActive - 1].classList.add('prev__item');
  imageItems[nextActive].classList.add('active__item');
  imageItems[nextActive + 1].classList.add('next__item');

}


const getTemplateSlides = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'LI') {
      const prevActive = document.querySelector('.dot__active');
      prevActive.classList.remove('dot__active');
      e.target.closest('li').classList.add('dot__active');
    }
    getActiveSlide();
    const activeItem = putActiveDot();
    putActiveSlide(activeItem);
};
  

export {/* dots, */ moveSlide, putActiveDot, getActiveSlide, putActiveSlide, getTemplateSlides};