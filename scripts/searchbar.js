const res = document.querySelector('.shengtrans').innerHTML;

function generativeDisplay() {
   setTimeout(() => {
    let ai = document.querySelector('.illu')
    .innerHTML= 'Generating.  ';

    ai.innerHTML = ''
   },1000);

   setTimeout(() => {
    let ai = document.querySelector('.illu')
    .innerHTML= 'Generating..  ';

    ai.innerHTML = ''
   },2000);

   setInterval(()=> {
    let ai = document.querySelector('.illu')
    .innerHTML= 'unangam sheng gani genje?'
   },5000);


};

 alert('Instead of Cookies🍪 accept Smochas🫔')

function reference() {
 /*Reference */
   setTimeout(() => {
      if (res !== null) {
         document.querySelector('.js-reference').
         innerHTML = 'Try searching the word in swahili , if the word is not translated.'
      }else{
          document.querySelector('.js-reference').
         innerHTML = ''
      };
   },5000);
   setTimeout(() => {
      if (res !== null) {
         document.querySelector('.js-reference').
         innerHTML = 'Try searching the word in sheng , if the word is not translated..'
      }else{
          document.querySelector('.js-reference').
         innerHTML = ''
      };
   },9000);
   setTimeout(() => {
      if (res !== null) {
         document.querySelector('.js-reference').
         innerHTML = 'Try searching the word in English , if the word is not translated...'
      }else{
          document.querySelector('.js-reference').
         innerHTML = ''
      };
   },15000);

};


 





