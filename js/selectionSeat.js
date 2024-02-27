function getClickedElement(clicked_id) {
  var element = document.getElementById(clicked_id);
  if (!element) {
    console.error("Element with ID '" + clicked_id + "' not found.");
    return; // Exit the function early if element not found
  }

  // Check if the element has the class
  const hasClass1 = element.classList.contains("bg-[#1dd100]");
  // If the element has the class, remove it; otherwise, add it
  if (hasClass1) {
    element.classList.remove(
      "bg-[#1dd100]",
      "text-white",
      "hover:bg-[#33e214]"
    );
    getInnerText = "";
    increaseOneAvailableSeat();
    reduceSelectedSeatCount();
    let getSelectedText = element.innerText;
    deleteTicket(getSelectedText);
    amountCalculationDiv();
  } else {
    element.classList.add("bg-[#1dd100]", "text-white", "hover:bg-[#33e214]");
    let getSelectedText = element.innerText;
    let seat = document.getElementById("selectedSeat");
    // let inputField = document.getElementById("phone");
    reduceOneAvailableSeat();
    increaseSelectedSeatCount();
    if (seat.innerText <= 4 || seat >= 1) {
      ticketReservation(getSelectedText);
      amountCalculationSum();
      let nextBtn = document.getElementById("next");
      nextBtn.classList.remove("pointer-events-none", "bg-slate-500");
      nextBtn.classList.add("bg-primary_clr");
      let nextPage = document.getElementById("nextPage");
      nextPage.classList.remove("pointer-events-none");
    } else {
      alert("You are not allowed to select more than four ticket.");
    }
  }
}

//Reducing availablility by selection one seat
function reduceOneAvailableSeat() {
  let findElement = document.getElementById("seatLeft");
  let getInnerText = findElement.innerText;
  let convertToInt = parseInt(getInnerText);
  let availableSeat = convertToInt - 1;
  findElement.innerText = availableSeat;
  return findElement;
}

//Increasing availablility by removing one seat from select
function increaseOneAvailableSeat() {
  let findElement = document.getElementById("seatLeft");
  let getInnerText = findElement.innerText;
  let convertToInt = parseInt(getInnerText);
  let availableSeat = convertToInt + 1;
  findElement.innerText = availableSeat;
  return findElement;
}

//Increasing selected seat by adding one seat from select
function increaseSelectedSeatCount() {
  let findElement = document.getElementById("selectedSeat");
  let getInnerText = findElement.innerText;
  let convertToInt = parseInt(getInnerText);
  let seatAdded = convertToInt + 1;
  findElement.innerText = seatAdded;
  return findElement;
}

//Reducing selected seat by removing one seat from select
function reduceSelectedSeatCount() {
  let findElement = document.getElementById("selectedSeat");
  let getInnerText = findElement.innerText;
  let convertToInt = parseInt(getInnerText);
  let seatAdded = convertToInt - 1;
  findElement.innerText = seatAdded;
  return findElement;
}

//adding ticket for reservation
function ticketReservation(getSelectedText) {
  let findElement = document.getElementById("reservation");
  let div = document.createElement("div");
  //adding a unique id to the newly created element
  let givingUniqueId = getSelectedText;
  div.id = givingUniqueId;
  //adding some classes
  div.classList.add("flex", "justify-between", "text-slate-500");
  findElement.appendChild(div);
  let h2a = document.createElement("h2");
  h2a.innerText = getSelectedText;
  div.appendChild(h2a);
  let h2b = document.createElement("h2");
  h2b.innerText = "Economy";
  div.appendChild(h2b);
  let h2c = document.createElement("h2");
  h2c.innerText = 550;
  div.appendChild(h2c);
}

//delete ticket from reservation
function deleteTicket(getSelectedText) {
  let element = document.getElementById(getSelectedText);
  element.classList.add("hidden");
}

//calculate amount sum
function amountCalculationSum() {
  let element = document.getElementById("selectedSeat");
  let totalSelectedSeat = element.innerText;
  let convertToInt = parseInt(totalSelectedSeat);
  let price = convertToInt * 550;
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = price;
  //Grand total without discount price
  let discountPrice = 0;
  let grandTotal = price - discountPrice;
  document.getElementById("grandTotal").innerText = grandTotal;
  //discount price calculation including coupon
  //if the price is 2200 (means 4 seat selected)
  if (price === 2200) {
    //enabaling apply coupon button
    let element2 = document.getElementById("discountBtn");
    element2.classList.remove("pointer-events-none", "bg-slate-500");
    element2.classList.add("bg-primary_clr");
    //discount price calculation
    element2.addEventListener("click", function () {
      let inputValue = document.getElementById("couponInputField");
      let getValue = inputValue.value;
      //discount price calculation with coupon "NEW15"
      if (getValue === "NEW15") {
        discountPrice = 2200 * 0.15;
        let element3 = document.getElementById("totalWithDiscount");
        let div = document.createElement("div");
        div.classList.add("flex", "justify-between");
        element3.appendChild(div);
        let h2a = document.createElement("h2");
        h2a.innerText = "Discount Price";
        h2a.classList.add("font-normal");
        div.appendChild(h2a);
        let h2b = document.createElement("h2");
        h2b.innerText = "BDT " + discountPrice;
        //adding a unique id to the newly created element
        let givingUniqueId = "dPrice";
        h2b.id = givingUniqueId;
        h2b.classList.add("font-normal");
        div.appendChild(h2b);

        //Grand total calculation with discount price with the coupon "NEW15"
        let grandTotal = price - discountPrice;
        document.getElementById("grandTotal").innerText = grandTotal;
      }
      //discount price calculation with coupon "Couple 20"
      else if (getValue === "Couple 20") {
        discountPrice = 2200 * 0.2;
        let element3 = document.getElementById("totalWithDiscount");
        let div = document.createElement("div");
        div.classList.add("flex", "justify-between");
        element3.appendChild(div);
        let h2a = document.createElement("h2");
        h2a.innerText = "Discount Price";
        h2a.classList.add("font-normal");
        div.appendChild(h2a);
        let h2b = document.createElement("h2");
        h2b.innerText = "BDT " + discountPrice;
        //adding a unique id to the newly created element
        let givingUniqueId = "dPrice";
        h2b.id = givingUniqueId;
        h2b.classList.add("font-normal");
        div.appendChild(h2b);

        //Grand total with discount price with the coupon "Couple 20"
        let grandTotal = price - discountPrice;
        document.getElementById("grandTotal").innerText = grandTotal;
      } else {
        alert("Invalid Coupon");
      }
    });
  }
}

//reducing total price and grand total price when unselected any seat
function amountCalculationDiv() {
  let element = document.getElementById("selectedSeat");
  let totalSelectedSeat = element.innerText;
  let convertToInt = parseInt(totalSelectedSeat);
  let formula = 4 - convertToInt;
  let price = (4 - formula) * 550;
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = price;
  let grandTotal = document.getElementById("grandTotal");
  grandTotal.innerText = price;

  //reduce discount price
  if (totalSelectedSeat !== 4) {
    let calc = 0;
    document.getElementById("dPrice").innerText = calc;
  }
  if(price !== 2200){
    //disabling apply coupon button
    let element2 = document.getElementById("discountBtn");
    element2.classList.remove("bg-primary_clr");
    element2.classList.add("pointer-events-none", "bg-slate-500");
  }
}
