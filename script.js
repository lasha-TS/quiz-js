const start = document.querySelector('.start');
const testbox = document.querySelector('.testbox');
const paragraph = document.querySelector('#paragraph');
const answerbuttons = document.querySelector('.answerbuttons');
const score = document.querySelector('#score');
const answerbut = document.querySelectorAll('.answerbut');
const lastbox = document.querySelector('.lastbox');
const wintext = document.querySelector('.wintext');
const winimg = document.querySelector('.winimg');
const finishscore = document.querySelector('.finishscore');
const procentscore = document.querySelector('.procentscore');
const playAgain = document.querySelector('.againbutton');


let objectArr = 0;

const URL = './quiz.json';
fetch(URL)
  .then(response => response.json())
  .then(json => {
    randomJson = json.sort(() => Math.random() - 0.5);
    start.addEventListener('mousedown', () => {
      answerbut.forEach(element => {
        element.disabled = false;
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
        start.textContent = 'შემდეგ';
      }, 300);


      answerbut[0].textContent = objArr.probableAnswers[0];
      answerbut[1].textContent = objArr.probableAnswers[1];
      answerbut[2].textContent = objArr.probableAnswers[2];
      answerbut[3].textContent = objArr.probableAnswers[3];

      answerbut.forEach((but) => {
        but.addEventListener('click', () => {
          if (but.textContent === objArr.trueAnswer) {
            but.style.background = 'green';
            score.textContent++;
            for (let i = 0; i <= 3; i++) {
              answerbut[i].disabled = true;
              start.disabled = false;
            }
          } else {
            but.style.background = 'red';
            for (let i = 0; i <= 3; i++) {
              answerbut[i].disabled = true;
              start.disabled = false;
            }
          }
        });
      });
      if (objectArr === 11) {
        lastbox.style.display = 'flex';
        winimg.src = './img/source.gif';
        finishscore.textContent = `${score.textContent}/10`;
        finishscore.style.color = 'green';
        lastbox.style.width = '25rem';
        lastbox.style.height = '100vh'
      }
      if (score.textContent == 10) {
        wintext.textContent = "გილოცავ შენ ყველა შეკითხვას სწორად უპასუხე.";
        winimg.src = './img/source.gif';
      } else if (score.textContent > 5) {
        winimg.src = './img/source.gif';
        wintext.textContent = "კარგი შედეგია კიდევ სცადე მეტი შეგიძლია.";
      } else {
        wintext.textContent = "დაბალი შედეგია, ცადე მეტი შეძლო.";
        winimg.src = './img/louser.gif';
      }
    });
    playAgain.addEventListener('click', () => {
      location.reload();
      })
    })
  


