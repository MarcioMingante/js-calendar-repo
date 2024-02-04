const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const daysList = document.getElementById('days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const decemberlist = decemberDaysList[index];

  const day = document.createElement('li');
  day.className = 'day';
  day.innerText = `${decemberlist}`;

  if (decemberlist === 24 || decemberlist === 25 || decemberlist === 31) {
    day.className += ' holiday';
  }

  if (decemberlist === 4 || decemberlist === 11 || decemberlist === 18 || decemberlist === 25) {
    day.className += ' friday';
  }

  daysList.appendChild(day);
}

// Segundo requisito

const holidayButton = document.getElementById('btn-holiday');

holidayButton.addEventListener('click', () => {
  const holidays = document.getElementsByClassName('holiday');

  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'green') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else if (holidays[index].style.backgroundColor !== 'green') {
      holidays[index].style.backgroundColor = 'green';
    }
  }
});

// Terceiro rerquisito

const fridayButton = document.getElementById('btn-friday');
const fridays = document.getElementsByClassName('friday');
const savedDays = [];

for (let index = 0; index < fridays.length; index += 1) {
  savedDays.push(fridays[index].innerText);
}

fridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== 'sextou') {
      fridays[index].innerText = 'sextou';
    } else if (fridays[index].innerText === 'sextou') {
      fridays[index].innerText = savedDays[index];
    }
  }
});

// Quarto requisito

const days = document.getElementsByClassName('day');

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseover', () => {
    days[index].style.fontSize = '30px';
  });
}

for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseleave', () => {
    days[index].style.fontSize = '20px';
  });
}

// Exercicios bônus
