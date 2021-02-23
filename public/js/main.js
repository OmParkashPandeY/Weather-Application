// ------------------------------------------------------------------------------------------------------

function GetValue() {
    const Getmaintempfield = document.getElementById('InputFieldValue');
    const FindBlanksDetails = document.getElementById('maintempfield');
    FindBlanksDetails.innerText = Getmaintempfield.value;
}

// -------------------------------------------------------------


// -------------------------------------------------------------

const SubmitButton = document.getElementById('SubmitButton');
const CityName = document.getElementById('InputFieldValue');

// ------------------------------
const FindBlanksDetails = document.getElementById('maintempfield');
const VMainTemperature = document.getElementById('maintemperature');
const VTempFH = document.getElementById('tempfh');
const VCityDetails = document.getElementById('citydetails');
const VStateName = document.getElementById('statename');
const VCountryName = document.getElementById('countryname');
const TempType = document.getElementById('temptype');
const TimeDateDetails = document.getElementById('timedetails');


// -------------------------------------------------------------
// Function Declaration 

  const GetWeatherInformation = async(event) =>
  {
      event.preventDefault();
     
    if(CityName.value === "")
    {
        const maintempfield = document.getElementById('maintempfield');
        maintempfield.innerText = "City name must be require";

    }
    else
    {
        try 
        {
            // -------------------------------------------------------------
            
            let RURL = `http://api.openweathermap.org/data/2.5/weather?q=${CityName.value}&appid=36861c5fb27fc0f67fd43ca0063d42b8`;
            let URL = `http://api.weatherapi.com/v1/current.json?key=93fcc3951c5d4e28979111415212202&q=${CityName.value}`;
            
            // -------------------------------------------------------------
            
            const Response = await fetch(URL);
            ConvertCityInfo = await Response.json();
            ArrayCityInfo =[ConvertCityInfo];

            // -------------------------------------------------------------
            
            const City = ArrayCityInfo[0].location.name;
            const State = ArrayCityInfo[0].location.region;
            const Country = ArrayCityInfo[0].location.country;
            const Localtime = ArrayCityInfo[0].location.localtime;
            const CityTemp = ArrayCityInfo[0].current.temp_c;
            const TempMood = ArrayCityInfo[0].current.condition.text;
            const CityTempFH = ArrayCityInfo[0].current.temp_f;
        
            console.warn(CityTempFH);
            // -------------------------------------------------------------
            
            VMainTemperature.innerText =`City temperature is :- ${CityTemp}°C`;
            VTempFH.innerText = `City temperature in firon height :- ${CityTempFH}°C`;
            VCityDetails.innerText = `City :- ${City}`;
            VStateName.innerText = `State :- ${State}`;
            VCountryName.innerText = `Country :- ${Country}`;
            TempType.innerText = `Temperature type :- ${TempMood}`;
            TimeDateDetails.innerText = `Data & Time is :- ${Localtime}`;

            // -------------------------------------------------------------
            


        }
        catch
        {
            FindBlanksDetails.innerText ="Please enter city name properly";
        }
      
    }
  
  }

// -------------------------------------------------------------
// Function Calling

SubmitButton.addEventListener('click',GetWeatherInformation);

// ------------------------------------------------------------------------------------------------------
