//1. filter music suggestions array (arr) by object that includes the weathers name - 'rain', 'haze' etc..
//2.take that array of songs and sort it randomly (shuffle it)
//3.take the first song in the shuffled array [0] and add it to iframe-1
//4.take second song in the shuffled array [1] and add it to iframe-2
//* they kind've take a second to pop up, how can we make this faster? animation for it while loading? use local mp4 videos instead of links?
export const randomizeSongs = (arr, weatherData) => {
  let getTunesObject = arr
    .filter((obj) => obj.name.includes(weatherData.weather[0].main))
    .map((i) => i.songs);
  let isolatedSongs = getTunesObject[0].sort(() => Math.random() - 0.5);
  document.getElementById("iframe-1").setAttribute("src", isolatedSongs[0]);
  document.getElementById("iframe-2").setAttribute("src", isolatedSongs[1]);
};

//fetch weather data from openweatherapi
const api_key = process.env.REACT_APP_API_KEY; //hidden api for openweatherapi
export const fetchData = async (
  e,
  zip,
  countryCode,
  setZip,
  setError,
  history
) => {
  e.preventDefault();
  try {
    let data = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${api_key}&units=imperial`
      )
    ).json();
    if (data.cod === 200) {
      localStorage.setItem("storedData", JSON.stringify(data));
      setZip("");
      setError(false);
      history.push("/weatherDetails");
    } else {
      setError(true);
    }
  } catch (err) {
    console.log("error" + err);
  }
};

export const tempConvert = (x) => {
  return Math.round((5 / 9) * (parseInt(x) - 32));
};




