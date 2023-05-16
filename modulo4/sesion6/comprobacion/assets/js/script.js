
function getTimeInTimeZone(timezone) {
    const date = new Date();
    const options = { timeZone: timezone, hour12: false };
    return date.toLocaleTimeString('en-US', options);
  }


  function updateTimes() {
    const timezones = [
      { timezone: 'America/Santiago', country: 'Santiago de Chile', flag: 'chile.png' },
      { timezone: 'Europe/Paris', country: 'Paris', flag: 'france.png' },
      { timezone: 'Europe/London', country: 'London', flag: 'uk.png' },
      { timezone: 'America/New_York', country: 'New York', flag: 'usa.png' },
      { timezone: 'Europe/Moscow', country: 'San Petesburgo', flag: 'russia.png' },
      { timezone: 'Asia/Shanghai', country: 'Beijing', flag: 'china.png' },
      { timezone: 'Asia/Seoul', country: 'Seoul', flag: 'south-korea.png' }
    ];

    const divs = document.getElementsByClassName('clock');

    for (let i = 0; i < divs.length; i++) {
      const { timezone, country, flag } = timezones[i];
      const time = getTimeInTimeZone(timezone);

      const flagImg = document.createElement('img');
      flagImg.src = `./flags/${flag}`;
      flagImg.alt = `${country} Flag`;
      flagImg.classList.add('flag');

      const timeDiv = document.createElement('div');
      timeDiv.textContent = `${timezone}: ${time}`;

      divs[i].innerHTML = '';
      divs[i].appendChild(flagImg);
      divs[i].appendChild(timeDiv);
    }
  }


  function loadTimes() {
    const divs = document.getElementsByClassName('clock');

    for (let i = 0; i < divs.length; i++) {
      const delay = (i + 1) * 4000;
      setTimeout(() => {
        divs[i].style.display = 'block';
        updateTimes();
      }, delay);
    }
  }


  window.onload = loadTimes;


  setInterval(updateTimes, 1000);