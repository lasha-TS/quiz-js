const start = document.querySelector('.start');
const testbox = document.querySelector('.testbox');
const paragraph = document.querySelector('#paragraph');
const answerbuttons = document.querySelector('.answerbuttons');
const score = document.querySelector('#score');
const answerbut = document.querySelectorAll('.answerbut');
let objectArr = 0;

const URL = './quiz.json';
fetch(URL)
  .then(response => response.json())
  .then(json => {
    randomJson = json.sort(() => Math.random() - 0.5)
    start.addEventListener('click', () => {
      answerbut.forEach(element => {
        element.disabled = false
      });
      start.disabled = true;
      const objArr = randomJson[objectArr];
      paragraph.textContent = objArr.question;
      start.style.height = '4rem';
      start.style.transform = 'rotate(360deg)';
      answerbut.forEach(but => {
        answerbuttons.style.display = 'flex';
        but.style.background = 'white';
      })

      objectArr++;
      setTimeout(() => {
        start.textContent = 'Next ->';
      }, 300);
    
      // answerbut.enabled = true;

      answerbut[0].textContent = objArr.probableAnswers[0];
      answerbut[1].textContent = objArr.probableAnswers[1];
      answerbut[2].textContent = objArr.probableAnswers[2];
      answerbut[3].textContent = objArr.probableAnswers[3];
      
      answerbut.forEach((but, index) => {
        but.addEventListener('click', () => {
          if (but.textContent === objArr.trueAnswer) {
            console.log(index)
            but.style.background = 'green';
            score.textContent++;
            for(i = 0; i <=3; i++){
              answerbut[i].disabled = true;
              start.disabled = false;
            }
          
          } else {
            but.style.background = 'red';
            for(i = 0; i <=3; i++){
              answerbut[i].disabled = true;
              start.disabled = false;
            }
            console.log(index)
            
          }
          
        });
      });

    }); 
  });


