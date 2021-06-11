//*how can i make this faster? animation for it while loading? use local mp4 videos instead of links?
export const randomizeSongs = (arr, weatherData) => {
  let getTunesObject = arr
    .filter((obj) => obj.name.includes(weatherData.weather[0].main))
    .map((i) => i.songs);
  let isolatedSongs = getTunesObject[0].sort(() => Math.random() - 0.5);
  document.getElementById("iframe-1").setAttribute("src", isolatedSongs[0]);
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




