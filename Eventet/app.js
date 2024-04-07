
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

  if (isNaN(firstName) || isNaN(lastName)) {
    nameForm.style.display = 'none';
    additionalQuestionsForm.style.display = 'block';
  } else {
    alert("Të lutem sheno emrin dhe mbiemrin nëse dëshironi të vazhdoni tutje!");
  }
}

function toggleForm() {
  var forma1 = $('#nameSurnameForm');
  if (forma1.is(':hidden')) {
    forma1.show();
  } else {
    forma1.hide();
  }
}