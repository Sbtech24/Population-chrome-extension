async function fetchdata(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '027dfe8610msha1b3f6f3674a3dep143250jsn25979b988a41',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    const res= await fetch('https://covid-193.p.rapidapi.com/statistics', options)
    const record = await res.json()
    console.log(record)
     document.getElementById("covid_stats").innerHTML=record.response.map(response =>`<li>${response.country+ response.population}</li>` ).join(' ');   
}

fetchdata()