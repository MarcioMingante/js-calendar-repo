const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

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
