const starsArr = Array.from(document.getElementsByClassName('js-rate-button__active-star'));
let currentIndex = null;
let currentRate = null;

const setRate = (rate) => currentRate = 5 - rate;

starsArr.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;

    starsArr.forEach(star => star.innerHTML = 'star_border');

    for (let i = index; i < starsArr.length; i++ ) {
      starsArr[i].innerHTML = 'star';
    }

    setRate(currentIndex);
  });

  item.addEventListener('mouseover', () => {
    starsArr.forEach(star => star.innerHTML = 'star_border');

    for (let i = index; i < starsArr.length; i++ ) {
      starsArr[i].innerHTML = 'star';
    }
  });
  
  item.addEventListener('mouseout', () => {
    if (currentIndex === null) {
      return starsArr.forEach( star => star.innerHTML = 'star_border');
    }
    if (currentIndex !== 0) {
      for (let i = 0; i < currentIndex; i++ ) {
        starsArr[i].innerHTML = 'star_border';
      }
    }

    for (let i = currentIndex; i < starsArr.length; i++ ) {
      starsArr[i].innerHTML = 'star';
    }
  });
});
