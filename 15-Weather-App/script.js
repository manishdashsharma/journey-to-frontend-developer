// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const backgroundImage = document.getElementsByClassName('container');
const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=b312f71ed8734433b1b81149231202&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Displaying the data in HTML
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;

  if (weatherStatus.innerHTML === 'Sunny') {
    backgroundImage[0].style.backgroundImage = `url('https://media.giphy.com/media/wNipYAoZ3iaEE/giphy.gif')`;
  }
  else if ( weatherStatus.innerHTML === 'Rainy') {
    backgroundImage[0].style.backgroundImage = `url('https://media.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif')`;
    backgroundImage[0].style.backgroundSize = 'cover';
  }
  else if ( weatherStatus.innerHTML === 'Overcast' || weatherStatus.innerHTML === 'Clear') {
    backgroundImage[0].style.backgroundImage = `url('https://media.giphy.com/media/eebc0t8jYBNOYfchyY/giphy.gif')`;
    backgroundImage[0].style.backgroundSize = 'cover';
    backgroundImage[0].style.color = 'black';
  }
  else{
    backgroundImage[0].style.backgroundImage = `url('https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif')`;
    backgroundImage[0].style.backgroundSize = 'cover';
    backgroundImage[0].style.color = 'white';
  }
};
