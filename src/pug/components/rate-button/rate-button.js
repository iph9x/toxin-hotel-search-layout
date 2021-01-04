let starsArr = Array.from(document.getElementsByClassName('rate-button__star'));
let currentIndex = null;
let currentRate = null;

const setRate = (rate) => currentRate = 5 - rate;

starsArr.forEach((item, index) => {
  item.addEventListener('mouseover', e => {
    starsArr.forEach(star => star.innerHTML = 'star_border');

    for (let i = index; i < starsArr.length; i++ ) {
      starsArr[i].innerHTML = 'star';
    }
  });
  
  item.addEventListener('mouseout', e => {
    if (currentIndex === null) {
      starsArr.forEach( star => star.innerHTML = 'star_border');
    } else {
      if (currentIndex !== 0) {
        for (let i = 0; i < currentIndex; i++ ) {
          starsArr[i].innerHTML = 'star_border';
        }
      }

      for (let i = currentIndex; i < starsArr.length; i++ ) {
        starsArr[i].innerHTML = 'star';
      }
    }        
  });

  item.addEventListener('click', () => {
    currentIndex = index;

    starsArr.forEach(star => star.innerHTML = 'star_border');

    for (let i = index; i < starsArr.length; i++ ) {
      starsArr[i].innerHTML = 'star';
    }
    
    setRate(currentIndex);
  })
})