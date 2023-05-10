function toggleNav() {
  let h_drop = document.getElementById("hamburger-dropdown");
  const element = document.getElementsByName("deactivate")[0];
  const element2 = document.getElementsByName("activate")[0];
  let nav = document.getElementById("nav");
  let on = h_drop.getAttribute("name");
  if (on == "deactivate") {
    nav.style.height = "25vh";
    h_drop.style.display = "block";
    element.setAttribute("name", "activate");
  }
  if (on == "activate") {
    nav.style.height = "3.5rem";
    h_drop.style.display = "none";
    element2.setAttribute("name", "deactivate");
  }
  console.log(h_drop.getAttribute("name"));
}

// Selected seats
let totalSeats = [
  [
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
  [
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
  [
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
  [
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
  [
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
  ],
];

let changed = [];
const seatContainer = document.getElementById("seat-container");

function refreshSeats() {
  totalSeats.forEach((rowSeats, index) => {
    let singleRow = '<div class="row-' + (index + 1) + ' row-padding">';
    rowSeats.forEach((singleSeat, singleIndex) => {
      if (singleSeat === true) {
        singleRow += `<input type="checkbox" class="booked" ${
          singleSeat && "disabled checked"
        }>`;
      } else if (singleSeat === false) {
        singleRow += `<input type="checkbox" onClick="selectSeat(this, ${index}, ${singleIndex})" class="available">`;
      }
    });
    singleRow += "</div>";
    seatContainer.innerHTML = seatContainer.innerHTML + singleRow;
  });
}

refreshSeats();

function selectSeat(el, row, col) {
  if (el.checked) {
    el.classList.add("current-selected-seat");
    totalSeats[row][col] = true;
    changed.push(0);
  } else {
    el.classList.remove("current-selected-seat");
    totalSeats[row][col] = false;
    changed.pop();
  }
}

function handleBooking() {
  if (changed.length < 1) {
    alert("Please select a seat");
    return;
  }
  seatContainer.innerHTML = "";
  refreshSeats();
  changed = [];
}
