window.addEventListener("load", () => {
  let select = document.querySelector("#year-select");
  let year = new Date().getFullYear();
  for (let i = 1; i <= 11; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", year + i);
    option.innerText = year + i;
    select.append(option);
    console.log(option);
  }
  let timeBlock = document.querySelector('.block_diffrent');
  timeBlock.style = 'display: none';
});


let span = document.querySelector(".block_output-time");
let setDate = setInterval(() => {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  const week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  let date = new Date();
  if (date.getDate() < 10) {
    span.innerHTML = "0" + date.getDate();
  }
  span.innerHTML =
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    " г." +
    `, ${week[date.getDay()]}, ` +
    ` ${date.toLocaleTimeString()}`;
}, 300); // вызывать не надо в виде setdate(), так как код автоматически выполняется через 1 секунду

let resultvaluesel = null;
let resetInterval = null;

const select = document.querySelector("#year-select");

select.addEventListener("change", () => {
  const selected = select.selectedIndex;
  if (selected !== 0) {
    const value = select.options[selected].value;

    resultvaluesel = value;
    console.log(resultvaluesel);
    clearInterval(resetInterval);
    

    // Запускаем новый интервал
    resetInterval = setInterval(btnDate, 50);
    let timeBlock = document.querySelector('.block_diffrent');
  timeBlock.style = 'display: block;';
  } else if (selected == 0) {
    
    let timeBlock = document.querySelector('.block_diffrent');
  timeBlock.style = 'display: none';
      clearInterval(resetInterval)
 
  }
});

const btnDate = () => {
  let date1 = new Date();
  let date2 = new Date(`${resultvaluesel}T00:00:00`);

  const diff = Math.abs(date2 - date1);
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log(day);
  const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hour);
  const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minute);
  var second = Math.floor((diff % (1000 * 60)) / 1000);
  console.log(second);

  let timemain = document.querySelector(".block_diffrent");
  let days = timemain.querySelector(".block_diffrent-day");
  days.innerText = `${day} ${
    day % 10 == 0
      ? "дней"
      : day % 10 == 1
      ? "день"
      : day % 10 == 2 || day % 10 == 3 || day % 10 == 4
      ? "дня"
      : "дней"
  }`;
  let hours = timemain.querySelector(".block_diffrent-hour");
  hours.innerText = `${hour}  ${
    hour == 0 || (hour <= 20 && hour >= 5)
      ? " часов"
      : hour == 1 || hour == 21
      ? " час"
      : hour <= 4 || hour == 22 || hour == 23
      ? " часа"
      : ""
  }`;
  let minutes = timemain.querySelector(".block_diffrent-minutes");
  minutes.innerText = `${minute} ${
    minute == 0
      ? " минут"
      : minute == 1 ||
        minute == 21 ||
        minute == 31 ||
        minute == 41 ||
        minute == 51
      ? " минута"
      : minute == 4 ||
        (minute >= 22 && minute <= 24) ||
        (minute >= 32 && minute <= 34) ||
        (minute >= 42 && minute <= 44) ||
        (minute >= 52 && minute <= 54)
      ? " минуты"
      : " минут"
  }`;
  let seconds = timemain.querySelector('.block_diffrent-second')
  seconds.innerText= `${second} ${ second == 1 || second == 21 || second == 31 || second == 41 || second == 51
    ? " секунда"
    : (second <= 4 && second >= 2) ||
      (second >= 22 && second <= 24) ||
      (second >= 32 && second <= 34) ||
      (second >= 42 && second <= 44) ||
      (second >= 52 && second <= 54)
    ? " секунды"
    : " секунд"}`;
  
};
