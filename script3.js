let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};



  
  
  // Source code 🚩
  
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

    async function typeText(element, text) {
      for (let character of text) {
        element.innerHTML += character;
        await sleep(100);
      }
    }

    async function initTypingAnimation() {
      const paragraphs = document.querySelectorAll('.reveal');
      for (const paragraph of paragraphs) {
        const text = paragraph.innerText;
        paragraph.innerText = '';
        await typeText(paragraph, text);
      }
    }

    document.addEventListener('DOMContentLoaded', initTypingAnimation);


/* */
const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.hero-imag img', { delay: 450, origin: 'top' });

 


