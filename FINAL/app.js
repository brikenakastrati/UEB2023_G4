
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
const additionalQuestionsForm = document.getElementById('additionalQuestionsForm');

if (isNaN(firstName) || isNaN(lastName)) {
  
  nameForm.style.display = 'none';
  myForm.style.display = 'block';
  setTimeout(showResults,  120000); // 2 minutes timeout
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

const resultsContainer = document.getElementById('rezultati');
if (resultsContainer) {
resultsContainer.scrollIntoView();
}
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

$("#learnMoreButton").on("click", function() {
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

$(document).ready(function() {

  $(".box1, .box2").css("opacity", 1);

    $(".box1, .box2").hover(function() {
        $(this).stop().animate({
            opacity: 0,
        }, 3000);
    }, function() {
        $(this).stop().animate({
            opacity: 1,
        }, 3000);
    });

  $("dl dt, dl dd").hover(function() {
      $(this).css("color", "#ff6600");
  }, function() {
      $(this).css("color", ""); 
  });
});