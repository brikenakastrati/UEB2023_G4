
function showWarning() {
  alert("Ky button rinis Slideshow-in nga foto e parë !"); // Paraqet një vërejtje në një dialog alert
}

function scrollToSection(ProgrametDitore) {
  const section = document.querySelector(ProgrametDitore);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth'
      });
    }}

function scrollToSection(NgjarjetPerseritura) {
  const section = document.querySelector(NgjarjetPerseritura);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth'
      });
  }
}

function scrollToSection(NgjarjetSpeciale) {
  const section = document.querySelector(NgjarjetSpeciale);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth'
      });
  }
}
function scrollToSection(NgjarjetKaluara) {
  const section = document.querySelector(NgjarjetKaluara);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth'
      });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    const cards = document.querySelectorAll('.card');

    if (cards.length === 0) {
      throw new Error('No card elements found.');
    }

    let index = 0;
    while (index < cards.length) {
      const card = cards[index];

      card.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(25, 47, 87, 0.592)';
      });

      card.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
      });

      index++;
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
});

function showAdditionalQuestions() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();

  const nameForm = document.getElementById('nameSurnameForm');
  const additionalQuestionsForm = document.getElementById('myForm');
  const timerDisplay = document.getElementById('timer');

  if (isNaN(firstName) || isNaN(lastName)) {
    // Set up the timer when the second form is displayed
    let timeInSeconds = 120;
    const timerInterval = setInterval(decrementTimer, 1000);

    function updateTimer() {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      const displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      timerDisplay.innerText = displayTime;
    }

    function decrementTimer() {
      if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimer();
      } else {
        clearInterval(timerInterval);
        showResults();
      }
    }

    setTimeout(() => {
      clearInterval(timerInterval);
      showResults(); // Call showResults when the timer reaches 2 minutes
    }, 120000); // 2 minutes in milliseconds

    nameForm.style.display = 'none';
    additionalQuestionsForm.style.display = 'block';
    timerDisplay.style.display = 'block'; // Show the timer
  } else {
    alert("Të lutem sheno emrin dhe mbiemrin nëse dëshironi të vazhdoni tutje! (Duke mos perdorur numra)");
  }
}


function showResults() {
  const correctAnswers = {
    'planeti': 'planetiToka',
    'galaktika': 'elliptike',
    'komete': 'kometeB',
    'yll': 'yllC',
    'Sistemi': 'SD-C',
    'planets': ['planetA', 'planetC']
  };

  const submittedAnswers = {
    'planeti': $("input[name='planeti']:checked").val(),
    'galaktika': $("input[name='galaktika']:checked").val(),
    'komete': $("input[name='komete']:checked").val(),
    'yll': $("input[name='yll']:checked").val(),
    'Sistemi': $("input[name='Sistemi']:checked").val(),
    'planets': [
      $("#planetA").prop("checked") ? 'planetA' : '',
      $("#planetC").prop("checked") ? 'planetC' : '',
      $("#planetB").prop("checked") ? 'planetB' : ''
    ]
  };

  const nameForm = document.getElementById('nameSurnameForm');
  const additionalQuestionsForm = document.getElementById('myForm');
  const timerDisplay = document.getElementById('timer');

  nameForm.style.display = 'block';
  additionalQuestionsForm.style.display = 'none';
  timerDisplay.style.display = 'none';
  
  nameForm.reset();
  additionalQuestionsForm.reset();

  const resultsContainer = document.getElementById('rezultati');
  resultsContainer.scrollIntoView();

  let correctCount = 0;
  let index = 1;
  let resultHTML = "<strong>Rezultati juaj :</strong><br>";

  for (let question in correctAnswers) {
    if (question === 'planets') {
      const submitted = submittedAnswers['planets'].filter(Boolean);
      const correct = correctAnswers['planets'];

      if (submitted.length === correct.length && correct.every((val) => submitted.includes(val))) {
        resultHTML += `Pyetja ${index} është e saktë<br>`;
        correctCount++;
      } else {
        resultHTML += `Pyetja ${index} është e pasaktë<br>`;
      }
    } else {
      if (submittedAnswers[question] === correctAnswers[question]) {
        resultHTML += `Pyetja ${index} është e saktë<br>`;
        correctCount++;
      } else {
        resultHTML += `Pyetja ${index} është e pasaktë<br>`;
      }
    }
    index++;
  }

  resultHTML += `<br>Numri i pergjigjjeve të sakta: ${correctCount}`;
  $("#rezultati").html(resultHTML);

  $("#learnMoreContainer").html('<br><p>Nese deshironi te dini me shume rreth astronomise, klikoni ketu:</p><br><button id="learnMoreButton" class="styledButton">Lexo me shume</button>');

  $("#learnMoreButton").on("click", function () {
    window.location.href = 'astronomy_page.html';
  });
}

function toggleForm() {
  var forma1 = $('#nameSurnameForm');
  if (forma1.is(':hidden')) {
    forma1.show();
  } else {
    forma1.hide();
  }
}

