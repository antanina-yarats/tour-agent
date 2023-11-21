

const box = document.querySelectorAll('.box');
console.log(box);


box.forEach(function(item){
    item.addEventListener('mouseover', function(){
        removeFocus();
        item.classList.add('selected');
    })  
})

function removeFocus(){
   box.forEach(function(item){
    item.classList.remove('selected');
   })
}



//onclick picture

const random = document.querySelector('#random');

//Canary

const infoC = [
    "The Canary islands sit just 100 kilometres (62 miles) from the African continent",
    "El Hierro is close to being energy self-sufficient",
    "The Canary islands are home to a whistling language",
    "The Canary islands are famous in Hollywood",
    "The canary bird was named after the Canary islands",
    "Not one, but TWO capital Cities in The Canary islands",
    "Mount Teide in the Canary islands is the third largest volcano in the world",
    "All of the Canary Islands are volcanic islands.",
  
]

const one = document.querySelector('#one');
one.addEventListener('click', showC);
function showC(){
    let canaryFact = infoC[Math.floor(Math.random()*infoC.length)];
    random.style.display = "block";
    random.textContent = canaryFact;
    

    if (window.innerWidth <= 1024){
        random.style.display = "none";
        stopAzoreMobile();
        stopHawaiiMobile();
        stopSocotraMobile();
        const randomMobileC = document.querySelector('#randomMobileC');
        randomMobileC.style.display = "block";
        randomMobileC.textContent = canaryFact;
        
    }
    
    
}

function stopShowCanary(){
 random.textContent = "";
}

function stopCanaryMobile(){
    randomMobileC.textContent = "";
}



//Azore

const infoA = [
    "São Miguel is the only place in the world where pineapples are grown in greenhouses",
    "São Miguel is home to the only tea plantation in Europe",
    "There are loads of colorful buildings.",
    "The Azores are known for cheese and wine production",
    "You can get by in English on the Azore islands",
    "Before humans settled on the islands, there were no land mammals, however Azores is now home to mice, rats, hedgehogs, rabbits and weasels.",
]

const two = document.querySelector('#two');
two.addEventListener('click', showA);

function showA(){
  stopShowCanary();
  let azoreFact = infoA[Math.floor(Math.random()*infoA.length)];
  random.textContent = azoreFact; 

  if(window.innerWidth <= 1024){
    random.style.display = "none";
    stopCanaryMobile();
    stopHawaiiMobile();
    stopSocotraMobile();
    const randomMobileA = document.querySelector('#randomMobileA');
    randomMobileA.style.display = "block";
    randomMobileA.textContent = azoreFact;
  }

}

function stopShowAzore(){
    random.textContent = "";
}

function stopAzoreMobile(){
    randomMobileA.textContent = "";
}

//Hawaii

const infoH =[
    "Surfing was invented in Hawaii",
    "You can mail a coconut from Hawaii",
    "Maui’s Mount Haleakala is the largest dormant volcano in the world.",
    "Hawaii is the only U.S. state with two official languages. English and Hawaiian.",
    "Hawaiians greet with a hug, not a handshake.",
    "There are no snakes in Hawaii. ",
    "The banyan tree in the center of Lahaina is one of the largest in the world.",
    "Hawaii is one of only two U.S. states where all forms of gambling are illegal.",
    "Hawaii is the most isolated population center on Earth: It’s about 10,000 meters (2,400 miles) from the Mainland U.S., the closest landmass.",
    "Celebrities who were born in Hawaii include former President Barack Obama and actress Nicole Kidman",
    "Dozens of movies have been filmed in Hawaii, including these Academy Award winners",
    "Only in Hawaii can you tan at the beach in the morning and make a snowball in the afternoon (atop Maunakea Volcano on Hawaii island)",
    "Maunakea reigns as the tallest mountain in the world, more than 33,000 feet high when measured from its submarine base.",
]

const three = document.querySelector('#three');
three.addEventListener('click', showH);
function showH(){
    stopShowAzore();
    let hawaiiFact = infoH[Math.floor(Math.random()*infoH.length)];
    random.textContent = hawaiiFact;

    if(window.innerWidth <= 1024){
        random.style.display = "none";
        stopAzoreMobile();
        stopCanaryMobile();
        stopSocotraMobile();
        const randomMobileH = document.querySelector('#randomMobileH');
        randomMobileH.style.display = "block";
        randomMobileH.textContent = hawaiiFact; 
    }
}

function stopShowHawaii(){
    random.textContent = "";
}

function stopHawaiiMobile(){
    randomMobileH.textContent = "";
}

//Socotra

const infoS = [
    "At Socotra, you can take a trip out of this world and still remain in this world!",
    "The name of the island Socotra probably derives from the Sanskrit words meaning ‘island of bliss’.",
    "The largest island, which is also called Socotra, has caves, mountains, dunes, and sandy beaches, and is 132 kilometres (82 miles) in length",
    "Socotra is known for its exotic flora numbering over 800 species, with more than a third of these species being endemic to the islands",
    "Socotra was an ancient hub for trading with people from Rome, Greece and Egypt, selling exclusive medicines; frankincense; and a special red resin known as ‘dragon’s blood‘ that was used as a dye and for medicinal purposes",
    "The ruins of an ancient city were uncovered on Socotra in 2010 by Russian archaeologists, and there are many caves, as well as nearby shipwrecks, that can be explored",
    "Industries in Socotra include date growing, pearl harvesting, and fishing; while ecotourism is becoming popular, with an increased number of visitors over recent years, and activities for tourists may comprise of diving, fishing, sailing and other water sports, as well as hiking.",
    "the Socotran people have their own language (which lacks a script) and distinctive culture, cuisine and architecture",
]

const four = document.querySelector('#four');
four.addEventListener('click', showS);
function showS(){
    stopShowHawaii();
    let socotraFact = infoS[Math.floor(Math.random()*infoS.length)];
    random.textContent = socotraFact;

    if(window.innerWidth <= 1024){
        random.style.display = "none";
        const randomMobileS = document.querySelector('#randomMobileS');
        stopHawaiiMobile();
        stopCanaryMobile();
        stopAzoreMobile();
        randomMobileS.style.display = "block";
        randomMobileS.textContent = socotraFact;

    }
    
}

function stopSocotraMobile(){
    randomMobileS.textContent = "";
}




console.log(window.innerWidth);


