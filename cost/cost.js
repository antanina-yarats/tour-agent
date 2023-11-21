const calculate = document.querySelector('#calculateBtn');


calculate.addEventListener('click', calculateAmount);

function calculateAmount(e) {

    e.preventDefault();
    
    const nights = Number(document.querySelector('#nights').value);
    const people = Number(document.querySelector('#people').value);
    
    const islands = Number(document.querySelector('#islands').value);
    const accommodation = Number(document.querySelector('#accommodation').value);
    const food = Number(document.querySelector('#food').value);

    const fly = Number(document.querySelector('#fly').value);
    

    if(nights === "" || nights<1){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information',
            
          })

    }

    if(people === "" || people<1){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information',
            
          })
    }

    if(isNaN(people)){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information',
            
          })
    }

    if(isNaN(nights)){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information',
            
          })
    }

    let landPerPerson = (accommodation+food+islands)*nights;
   

    let flyPerTrip = fly*people;
   

    let totalPerPerson = fly + landPerPerson;
   

    let totalPerTrip = totalPerPerson*people;
    


    landPerPerson = landPerPerson.toFixed(2);
    flyPerTrip = flyPerTrip.toFixed(2);
    totalPerPerson = totalPerPerson.toFixed(2);
    totalPerTrip = totalPerTrip.toFixed(2);


    document.querySelector('#pricePerson').textContent = totalPerPerson;
    document.querySelector('#priceTotal').textContent = totalPerTrip;

}


