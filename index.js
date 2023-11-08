
// Checks for errors after change due input 

function errorChecking() {

  let day, month, year;

  const dateInputs = document.querySelectorAll(".input-date");

  dateInputs.forEach((input) => {
    
    switch (input.name) {
      
      case "day":
        day = input.value;
        break;

      case "month":
        month = input.value;
        break;

      case "year":
        year = input.value;
        break;
    
    }

  });

  // naming ceremony
  const today = new Date();
  const birthdate = new Date(year, month - 1, day);

  const dayRed = document.getElementById('day-text');
  const monthRed = document.getElementById('month-text');
  const yearRed = document.getElementById('year-text');
  const dayBorder = document.getElementById('day');
  const monthBorder = document.getElementById('month');
  const yearBorder = document.getElementById('year');

  dayRed.classList.remove('color-red');
  monthRed.classList.remove('color-red');
  yearRed.classList.remove('color-red');
  dayBorder.classList.remove('border-red');
  monthBorder.classList.remove('border-red');
  yearBorder.classList.remove('border-red');
  
  const requiredDay = document.querySelector('.required-day');
  const requiredMonth = document.querySelector('.required-month');
  const requiredYear = document.querySelector('.required-year');
  const validDay = document.querySelector('.valid-day');
  const validMonth = document.querySelector('.valid-month');
  const validYear = document.querySelector('.valid-year');
  const validDate = document.querySelector('.valid-date');

  requiredDay.classList.add('hidden');
  requiredMonth.classList.add('hidden');
  requiredYear.classList.add('hidden');
  validDay.classList.add('hidden');
  validMonth.classList.add('hidden');
  validYear.classList.add('hidden');
  validDate.classList.add('hidden');

  //error checking part
  
  function red(){
     
      dayRed.classList.add('color-red');
      monthRed.classList.add('color-red');
      yearRed.classList.add('color-red');
      dayBorder.classList.add('border-red');
      monthBorder.classList.add('border-red');
      yearBorder.classList.add('border-red');
  }

  if (day === "" || month === "" || year === "" || isNaN((day)) || isNaN(month)  || isNaN(year)) {
    if (day === "" ) {
      requiredDay.classList.remove('hidden');
      red();
    }
    if (month === "" ) {
      requiredMonth.classList.remove('hidden');
      red();
    }
    if (year === "" ) {
      requiredYear.classList.remove('hidden');
      red();
    }
    if (isNaN(day)) {
      validDay.classList.remove('hidden');;
      red();
    }
    if (isNaN(month)) {
      validMonth.classList.remove('hidden');;
      red();
    }
    if (isNaN(year)) {
      validYear.classList.remove('hidden');;
      red();
    }
  } else if (day < 1 || day > 31) {
    red();
    validDay.classList.remove('hidden');
  } else if (month < 1 || month > 12) {
    red();
    validMonth.classList.remove('hidden');
  } else if (year < 1900 || year > 2100) {
    red();
    validYear.classList.remove('hidden');
  } else if (birthdate >= today) {
    red();
    validDate.classList.remove('hidden');
  } else if ((month == 2 && day > 29) || ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) || (day > 31)) {
    
    validDate.classList.remove('hidden');
    red();
  } else {
    calculateAge();         
  }
}


//called after error checking and also onclick in html

function calculateAge() {
   
  // getting inputs

  let day = document.getElementById('day').value;
   let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;
  
  //input storage

  const today = new Date();
  const birthdate = new Date(year, month - 1, day);
  
  


  
    //difference

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
    
    //negative values
    if (days < 0) {                                             

      months--;

        const temporary = new Date(today.getFullYear(), today.getMonth(), 0);
        days += temporary.getDate();
    
    }
    
    //negative values
    if (months < 0) {                                            

      years--;
      months += 12;
    
    }
      

    //output

    document.getElementById('year-output').innerHTML = "<span>" + years + "</span> years";
    document.getElementById('month-output').innerHTML = "<span>" + months + "</span> months";
    document.getElementById('day-output').innerHTML = "<span>" + days + "</span> days";
  
  }


