const axios = require('axios');


// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  let city = event.queryStringParameters.q;
 
  const API_SECRET = `${process.env.API_SECRET}`;
  //
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_SECRET}`;



//make get request to api
  try{

    const {data} = await axios.get(url);
    return {
      statusCode:200,
      body: JSON.stringify(data)
    }



  }catch(error){
    const{status, statusText, headers,data} = error.response
    return {
      statusCode:status,
      body: JSON.stringify({status,statusText,headers,data})
    }
  }

}

module.exports = { handler }
