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
          <button onclick = "showBtn(${user.id}, 'address')"><i class="fa-solid fa-location-dot"></i></button>
          <button onclick = "showBtn(${user.id}, 'company')"><i class="fa-regular fa-building"></i></i></button>
          <button onclick = "showBtn(${user.id}, 'contact')"><i class="fa-regular fa-envelope"></i></i></button>
          <a href="post.html?userId=${user.id}"><button><i class="fa-solid fa-comment"></i></button></a>
        </div>
        <div class="content row">
          <div class="address display">
            <button class="closeBtn" onclick = "closeBtn(${user.id}, 'address')"><i class="fa-solid fa-x"></i></button>
            Street:${user.address.street}<br>
            Suite:${user.address.suite}<br>
            City:${user.address.city}<br>
            Zipcode:${user.address.zipcode}<br>
          </div>
          <div class="company display">
            <button class="closeBtn" onclick = "closeBtn(${user.id},'company')"><i class="fa-solid fa-x"></i></button>
            Name: ${user.company.name}<br>
            CatchPhrase: ${user.company.catchPhrase}<br>
            Bs: ${user.company.bs}<br>
          </div>
          <div class="contact display">
            <button class="closeBtn" onclick = "closeBtn(${user.id},'contact')"><i class="fa-solid fa-x"></i></button>
            E-mail: ${user.email}<br>
            Phone: ${user.phone}<br>
            Website: ${user.website}<br>
          </div>
        </div>
    </div>`;
}

getUser();

function showBtn(id, btn) {
  if (btn === "address") {
    const address = document.querySelectorAll(".address");
    address[id - 1].classList.remove("display");
  } else if (btn === "company") {
    const btn = document.querySelectorAll(".company");
    btn[id - 1].classList.remove("display");
  } else if (btn === "contact") {
    const btn = document.querySelectorAll(".contact");
    btn[id - 1].classList.remove("display");
  }
}

function closeBtn(id, btn) {
  if (btn === "address") {
    const btn = document.querySelectorAll(".address");
    btn[id - 1].classList.add("display");
  } else if (btn === "company") {
    const btn = document.querySelectorAll(".company");
    btn[id - 1].classList.add("display");
  } else if (btn === "contact") {
    const btn = document.querySelectorAll(".contact");
    btn[id - 1].classList.add("display");
  }
}


