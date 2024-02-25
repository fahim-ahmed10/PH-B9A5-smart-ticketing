function getClickedElement(clicked_id) {
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
    reduceSelectedSeatCount();
  } else {
    element.classList.add("bg-[#1dd100]", "text-white", "hover:bg-[#33e214]");
    let getSelectedText = element.innerText; 
    console.log(getSelectedText);
    reduceOneAvailableSeat();
    increaseSelectedSeatCount();
    ticketReservation(getSelectedText);
  }
}

//Reducing availablility by selection one seat
function reduceOneAvailableSeat(){    
    let findElement = document.getElementById('seatLeft');
    let getInnerText  = findElement.innerText;
    let convertToInt = parseInt(getInnerText);
    let availableSeat = convertToInt - 1;
    let showAvailableSeat = seatLeft.innerText = availableSeat;
    return showAvailableSeat;
}

//Increasing availablility by removing one seat from select
function increaseOneAvailableSeat(){
    let findElement = document.getElementById('seatLeft');
    let getInnerText  = findElement.innerText;
    let convertToInt = parseInt(getInnerText);
    let availableSeat = convertToInt + 1;
    let showAvailableSeat = seatLeft.innerText = availableSeat;
    return showAvailableSeat;
}

//Increasing selected seat by adding one seat from select
function increaseSelectedSeatCount(){
    let findElement = document.getElementById('selectedSeat');
    let getInnerText = findElement.innerText;
    let convertToInt = parseInt(getInnerText);
    let seatAdded = convertToInt + 1;
    let showAddedSeat = findElement.innerText = seatAdded;
    return showAddedSeat;
}

//Reducing selected seat by removing one seat from select
function reduceSelectedSeatCount(){
    let findElement = document.getElementById('selectedSeat');
    let getInnerText = findElement.innerText;
    let convertToInt = parseInt(getInnerText);
    let seatAdded = convertToInt - 1;
    let showAddedSeat = findElement.innerText = seatAdded;
    return showAddedSeat;
}

//adding ticket for reservation
function ticketReservation(getSelectedText){
    let findElement = document.getElementById('reservation');
    let div =  document.createElement('div');
    div.classList.add("flex", "justify-between", "text-slate-500");
    findElement.appendChild(div);
    let h2a = document.createElement('h2');
    h2a.innerText = getSelectedText;
    div.appendChild(h2a);
    let h2b = document.createElement('h2');
    h2b.innerText = "Economy" ;
    div.appendChild(h2b);
    let h2c = document.createElement('h2');
    h2c.innerText = 550;
    div.appendChild(h2c);
}

//delete ticket from reservation
function deleteTicket(){
  
}