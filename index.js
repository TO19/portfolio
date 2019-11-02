window.onscroll = () => {
  progessBarOnScroll();
  scrollTopBtnHandle();
};

// Scroll to top button
const scrollToTopBtn = document.getElementById('topBtn');

const scrollTopBtnHandle = y => {
  if (document.body.scrollTop === 0) {
    scrollToTopBtn.style.display = 'none';
  }
  document.body.scrollTop > 319 || document.documentElement.scrollTop > 319
    ? (scrollToTopBtn.style.display = 'block')
    : (scrollToTopBtn.style.display = 'none');
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Porgress bar
const progessBarOnScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('progressBar').style.width = scrolled + '%';
};

// Cube selection
const cube = document.querySelector('.cube');
const radioGroup = document.querySelector('.radio-group');
let currentClass = '';

const changeSide = () => {
  const checkedRadio = radioGroup.querySelector(':checked');
  const showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
};

changeSide();
radioGroup.addEventListener('change', changeSide);

// WARN
console.warn(`
          
           ^
           !
           !
           ^
          / \\
         /___\\
        |= L =|
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
       /|##O##|\\
      / |##G##| \\
     /  |##I##|  \\
    |  / ^ | ^ \\  |
    | /  ( | )  \\ |
    |/   ( | )   \\|
        ((   ))
       ((  :  ))
       ((  :  ))
        ((   ))
         (( ))
          ( )
           |
           ^
          *G*
         *****
        *******  
       *********
      *********** 
     ******/\\***** 
    ******/  \\*****
   ******/ IS \\*****
  ******/__/\\__\\*****
 *********************
***********TE**********
___________/\\___________
`);
