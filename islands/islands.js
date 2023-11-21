

// THE CANARY

const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "801e55baff08f6b6028b92053ad67727"
}



async function getInfo(){
   const res = await fetch(`${api.endpoint}weather?q=las palmas de gran canaria, es&units=metric&appid=${api.key}`);
   const resReceived = await res.json();
   displayResult(resReceived);
}

getInfo();

function displayResult(resReceived){

    // date
    getOurDate();

   // temperature

   const temperatureCanary = document.querySelector('#temperatureCanary');
   temperatureCanary.innerHTML = `${Math.round(resReceived.main.temp)} <span>°C</span>`;


   // conditions

   const weatherCanary = document.querySelector('#weatherCanary');
   weatherCanary.textContent = `${resReceived.weather[0].main}`;

}

function getOurDate() {
    let myDate = new Date();
    
    let number = myDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector('#dateCanary');
    showDate.textContent = `${month}` + " " + `${number}` + ", " + `${year}`;

}

//THE AZORE


const apiPonta = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "df89378feaaa8d88a496d3083c17e66a"
}

async function getInfoPonta(){
  const resPonta = await fetch(`${apiPonta.endpoint}weather?q=ponta delgada, pt&units=metric&appid=${apiPonta.key}`);
  const resReceivedPonta = await resPonta.json();
  displayResultPonta(resReceivedPonta);
   
}

getInfoPonta();

function displayResultPonta(resReceivedPonta) {
    //date

    getPontaDate();

    //temperature
    let temperaturePonta = document.querySelector('#temperaturePonta');
    temperaturePonta.innerHTML = `${Math.round(resReceivedPonta.main.temp)} <span>°C</span>`;

    // weather conditions
    let weatherPonta = document.querySelector('#weatherPonta');
    weatherPonta.textContent = `${resReceivedPonta.weather[0].main}`;
}

function getPontaDate() {
    
    let pontaDate = new Date();
    

    //number

    let numberPonta = pontaDate.getDate();
    console.log(numberPonta);

    //month
    const monthsPonta = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthPonta = monthsPonta[pontaDate.getMonth()];


    //year

    let yearPonta = pontaDate.getFullYear();

    let showDatePonta = document.querySelector('#datePonta');
    showDatePonta.textContent = `${numberPonta}` + " " + `${monthPonta}` + " " + `${yearPonta}`;

    
}


//HAWAII

const apiHawaii = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "2ff9d2145fd2c82302d9998d9cee7ba5"
}



async function getInfoKahului(){
   const resKahului = await fetch(`${apiHawaii.endpoint}weather?q=kahului, us&units=metric&appid=${apiHawaii.key}`);
   const resReceivedKahului = await resKahului.json();
   displayResultKahului(resReceivedKahului);
}

getInfoKahului();

function displayResultKahului(resReceivedKahului){

    // date
    getOurDateKahului();

   // temperature

   const temperatureKahului = document.querySelector('#temperatureKahului');
   temperatureKahului.innerHTML = `${Math.round(resReceivedKahului.main.temp)} <span>°C</span>`;


   // conditions

   const weatherKahului = document.querySelector('#weatherKahului');
   weatherKahului.textContent = `${resReceivedKahului.weather[0].main}`;

}

function getOurDateKahului() {
    let myDateKahului = new Date();
    
    let numberKahului = myDateKahului.getDate();
    const monthsKahului = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthKahului = monthsKahului[myDateKahului.getMonth()];

    let yearKahului = myDateKahului.getFullYear();

    let showDateKahului = document.querySelector('#dateKahului');
    showDateKahului.textContent = `${monthKahului}` + " " + `${numberKahului}` + ", " + `${yearKahului}`;

}

//SOCOTRA

const apiSocotra = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "99f179e93f511eff064bb08b93805802"
}



async function getInfoSocotra(){
   const resSocotra = await fetch(`${apiSocotra.endpoint}weather?q=qalasiyah, us&units=metric&appid=${apiSocotra.key}`);
   const resReceivedSocotra = await resSocotra.json();
   displayResultSocotra(resReceivedSocotra);
}

getInfoSocotra();

function displayResultSocotra(resReceivedSocotra){

    // date
    getOurDateSocotra();

   // temperature

   const temperatureSocotra = document.querySelector('#temperatureSocotra');
   temperatureSocotra.innerHTML = `${Math.round(resReceivedSocotra.main.temp)} <span>°C</span>`;


   // conditions

   const weatherSocotra = document.querySelector('#weatherSocotra');
   weatherSocotra.textContent = `${resReceivedSocotra.weather[0].main}`;

}

function getOurDateSocotra() {
    let myDateSocotra = new Date();
    
    let numberSocotra = myDateSocotra.getDate();
    const monthsSocotra = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthSocotra = monthsSocotra[myDateSocotra.getMonth()];

    let yearSocotra = myDateSocotra.getFullYear();

    let showDateSocotra = document.querySelector('#dateSocotra');
    showDateSocotra.textContent = `${monthSocotra}` + " " + `${numberSocotra}` + ", " + `${yearSocotra}`;

}