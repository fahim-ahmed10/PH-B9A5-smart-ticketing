function getClickedElement(clicked_id, class1) {
  var element = document.getElementById(clicked_id);
  if (!element) {
    console.error("Element with ID '" + clicked_id + "' not found.");
    return; // Exit the function early if element not found
  }

  // Check if the element has the class
  const hasClass1 = element.classList.contains('bg-[#1dd100]');
  // If the element has the class, remove it; otherwise, add it
  if(hasClass1) {
    element.classList.remove("bg-[#1dd100]", "text-white", "hover:bg-[#33e214]");
    let removeInnerText = getInnerText = '';
    console.log(removeInnerText + "removed");
    increaseOneAvailableSeat();
  } else {
    element.classList.add("bg-[#1dd100]", "text-white", "hover:bg-[#33e214]");
    let getInnerText = element.innerText; 
    console.log(getInnerText);
    reduceOneAvailableSeat();
  }
}

//Reducing availablility by selection one seat
function reduceOneAvailableSeat(){    
    let seatLeft = document.getElementById("seatLeft");
    let getInnerText  = seatLeft.innerText;
    let convertToInt = parseInt(getInnerText);
    let availableSeat = convertToInt - 1;
    let showAvailableSeat = seatLeft.innerText = availableSeat;
    console.log(getInnerText, availableSeat, showAvailableSeat);
}

//Increasing availablility by removing one seat from select
function increaseOneAvailableSeat(){
    let seatLeft = document.getElementById("seatLeft");
    let getInnerText  = seatLeft.innerText;
    let convertToInt = parseInt(getInnerText);
    let availableSeat = convertToInt + 1;
    let showAvailableSeat = seatLeft.innerText = availableSeat;
}