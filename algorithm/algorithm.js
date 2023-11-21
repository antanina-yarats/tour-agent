gsap.from('.header',{
    y: -300,
    duration: 1.5,
    delay: 0.5,
    
    
})

gsap.to('h1', {
    opacity: 0,
    duration: 1.5,
    delay: 9
})


gsap.to('.question', {
    opacity: 1,
    duration: 1.5,
    delay: 0.6
})

gsap.to('.btn', {
    opacity: 1,
    duration: 1.5,
    delay: 0.6
})


/// buttons and functions 

const question = document.querySelector('.question');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const answer = document.querySelector('#answer');
const contact = document.querySelector('#contact');

//first question

yes.addEventListener('click', familyBud);
no.addEventListener('click', familyNoBud);


//Budget algorithm

function familyBud(){
    question.innerHTML = "Easy family holiday?";
    yes.addEventListener('click', greenBud);
    no.addEventListener('click', carnivalBud);
}

//function green forests

function greenBud(){
    question.innerHTML = "Wanna see forests and green valleys?";
    no.innerHTML = "Not necessarily";
    answer.style.display = 'none';
    yes.addEventListener('click', familyGreenBudAnwer);
    no.addEventListener('click', familyNoGreenBudAnswer);
    
}

function familyGreenBudAnwer(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination is the Azore Islands.";
}


function familyNoGreenBudAnswer(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination is the Canary Islands.";
}


function carnivalBud(){
    question.innerHTML = 'Busy night life and joyful carnivals?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', yesCarnivals);
    no.addEventListener('click', greenBud);
    answer.style.display = "none";

}

function yesCarnivals(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination is the Canary Islands.";
}

function noCarnivals(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination is the Azore Islands";
}

//No-budget algorithm

function familyNoBud(){
    question.innerHTML = "Easy family holiday?";
    yes.addEventListener('click', travelNoBud);
    no.addEventListener('click', travelNoProblemNoBud);
}

function travelNoBud(){
    question.innerHTML = "Do you prefer easy travel destinations?";
    no.innerHTML = "Not necessarily";
    yes.addEventListener('click', easyTravelGreens);
    no.addEventListener('click', desertedBeaches);
}

function easyTravelGreens(){
    question.innerHTML = "Want to be surrounded by tropical forests and green valleys?";
    no.innerHTML = "Not necessarily";
    yes.addEventListener('click', answerEasyTravelGreenFamily);
    no.addEventListener('click', yesCarnivals);
}



function desertedBeaches(){
    question.innerHTML = "Deserted white sand beaches, sleeping in a tent and stargazing?";
    yes.addEventListener('click', answerEasyTravelDryFamily);
    no.addEventListener('click', answerEasyTravelSportsFamily);
}

function answerEasyTravelGreenFamily(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination is the Hawaii Islands";
}

function answerEasyTravelDryFamily(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination is the Socotra Archipelago";
}


function answerEasyTravelSportsFamily(){
    question.innerHTML = "Wanna try different kinds of water sports and get the most of it?";
    no.innerHTML = "Not necessarily";
    yes.addEventListener('click', answerEasyTravelGreenFamily);
    no.addEventListener('click', yesCarnivals);
}

// Not easy family holiday === boring

function travelNoProblemNoBud(){
    question.innerHTML = 'Busy night life and joyful carnivals?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', yesCarnivals);
    no.addEventListener('click', offTheGrid);
}

function offTheGrid(){
    question.innerHTML = 'Wanna spend your vacation somewhere off-the-grid with no packs of tourists?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', answerEasyTravelDryFamily);
    no.addEventListener('click', bestWaterSports);
}

function bestWaterSports(){
    question.innerHTML = 'Wanna have the best experience from doing water sports?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', answerEasyTravelGreenFamily);
    no.addEventListener('click', trekking);
}

function trekking(){
    question.innerHTML = 'Do you like trekking?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', familyGreenBudAnwer);
    no.addEventListener('click', beach);
}
//yesCarnivals all yeses went wrong turned to noCarnivals
function beach(){
    question.innerHTML = 'Do you like lazing about on the beach?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', yesCanary);
    no.addEventListener('click', longTravel);
}

function yesCanary(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your destination is the Canary Islands";
}



function longTravel(){
    question.innerHTML = 'Are you OK with long flight to your destination?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', yesHawaii);
    no.addEventListener('click', stardardOfLiving); 
}

function yesHawaii(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your destination is the Hawaii Islands";
}


function stardardOfLiving(){
    question.innerHTML = 'Do you value high standard of life in your travel destination?';
    yes.innerHTML = "yes";
    no.innerHTML = "Not necessarily";
    yes.addEventListener('click', answerEasyTravelGreenFamily);
    no.addEventListener('click', breathtaking); 
}

function breathtaking(){
    question.innerHTML = 'Do you expect seeing breathtaking views like waterfalls, mountains, lakes and green valleys?';
    yes.innerHTML = "yes";
    no.innerHTML = "Not necessarily";
    yes.addEventListener('click', azoresOrHAwaiis);
    no.addEventListener('click', animals);
}

function azoresOrHAwaiis(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Your perfect holiday destination might be either the Azore Islands or the Hawaii Islands. The Azores have cooler and sunny weather. But rainy season is from November till March. If you pick the Hawaii, it's warm there most of the time, but December is the wettest and the coolest month";
  
}

function animals(){
    question.innerHTML = 'Do you like watching animals in the wild?';
    yes.innerHTML = "yes";
    no.innerHTML = "Not necessarily";
    yes.addEventListener('click', yesGoHawaii);
    no.addEventListener('click', wines);
}

function yesGoHawaii(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Go to the Hawaii Islands. You won't regret";
}

function wines(){
    question.innerHTML = 'Do you like wines and delicacies?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', yesGoCanary);
    no.addEventListener('click', walkingOnTheBeach);
}

function yesGoCanary(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Go to the Canary Islands. You won't regret";
}

function walkingOnTheBeach(){
    question.innerHTML = 'Do you like to go for a stroll along on the beach?';
    yes.innerHTML = "yes";
    no.innerHTML = "no";
    yes.addEventListener('click', yesFuerteVentura);
    no.addEventListener('click', contactUs);
}

function yesFuerteVentura(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Go to the Canary Islands. Fuerteventura is famous for its long white sand beaches.";
}

function contactUs(){
    question.style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    answer.style.display = "block";
    answer.innerHTML = "Contact us and our manager will help to find the right place just for you";  

}


