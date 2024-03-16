async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((user) => {
    createCards(user);
  });
}

const wrapper = document.querySelector(".wrapper");
const test = document.querySelector(".test");

function createCards(user) {
  wrapper.innerHTML += `
    <div class="card col-lg-6">
       <div class="userContent">
        <h3>${user.name}</h3>
        <h5>ID:${user.id}</h5>
       </div>
        <div class="buttonContainer">
          <button onclick = "addressBtn(${user.id})"><i class="fa-solid fa-location-dot"></i></button>
          <button onclick = "companyBtn(${user.id})"><i class="fa-regular fa-building"></i></i></button>
          <button onclick = "contactBtn(${user.id})"><i class="fa-regular fa-envelope"></i></i></button>
        </div>
        <div class="content row">
          <div class="address display">
            <button class="closeBtn" onclick = "closeAddressBtn(${user.id})"><i class="fa-solid fa-x"></i></button>
            Street:${user.address.street}<br>
            Suite:${user.address.suite}<br>
            City:${user.address.city}<br>
            Zipcode:${user.address.zipcode}<br>
          </div>
          <div class="company display">
            <button class="closeBtn" onclick = "closeCompanyBtn(${user.id})"><i class="fa-solid fa-x"></i></button>
            Name: ${user.company.name}<br>
            CatchPhrase: ${user.company.catchPhrase}<br>
            Bs: ${user.company.bs}<br>
          </div>
          <div class="contact display">
            <button class="closeBtn" onclick = "closeContactBtn(${user.id})"><i class="fa-solid fa-x"></i></button>
            E-mail: ${user.email}<br>
            Phone: ${user.phone}<br>
            Website: ${user.website}<br>
          </div>
        </div>
    </div>`;
}

getUser();

function addressBtn(id) {
  const address = document.querySelectorAll(".address");
  address[id - 1].classList.remove("display");
}

function companyBtn(id) {
  const company = document.querySelectorAll(".company");
  company[id - 1].classList.remove("display");
}

function contactBtn(id) {
  const contact = document.querySelectorAll(".contact");
  contact[id - 1].classList.remove("display");
}

function closeAddressBtn(id) {
  const address = document.querySelectorAll(".address");
  address[id - 1].classList.add("display");
}

function closeCompanyBtn(id) {
  const company = document.querySelectorAll(".company");
  company[id - 1].classList.add("display");
}

function closeContactBtn(id) {
  const contact = document.querySelectorAll(".contact");
  contact[id - 1].classList.add("display");
}
