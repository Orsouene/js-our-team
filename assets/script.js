// Una tabella dove c'è sono informazione sull team members
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png",
  },
];

// Creazione d'un titolo/////////////////////////////////
const myTitle = document.getElementById("title");
const titolo = document.createElement("p");
titolo.innerHTML = "Meet our team";
// stampato il titolo sulla pagine
myTitle.appendChild(titolo);
// Agguinto una classe al titolo
titolo.classList.add("p-prop");

// /////////Creazione d'un paragrafo///////////////////
const paragrafo = document.getElementById("descrizione");
const myParag = document.createElement("p");
myParag.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu risus id dui porta ultricies. Aenean nec enim eget velit sagittis porta. Duis non feugiat arcu. Ut euismod urna a neque vehicula pulvinar. Morbi sit amet venenatis neque, at suscipit justo. Curabitur lorem est, luctus et sollicitudin vel, auctor et ante. Cras vel imperdiet mi. Etiam vitae lacus massa. Vivamus ";
// stampato il paragrafo sulla pagine
paragrafo.appendChild(myParag);
// Agguinto una classe al paragrafo
myParag.classList.add("centrare");
// Creazione del secondo titolo
const secondTitle = document.getElementById("secondTitle");
secondTitle.innerHTML = "Diventa parte del nostro team di esperti";
secondTitle.classList.add("centrare", "p-prop");
// Aggiungere un nuovo team member
const myForm = document.getElementById("form");
myForm.addEventListener("submit", myFunction);
let newMember = {};

function myFunction(event) {
  event.preventDefault();
  const name = document.getElementById("nome").value;
  const role = document.getElementById("ruolo").value;
  const email = document.getElementById("mail").value;
  const img = document.getElementById("img").value;
  newMember = {
    name,
    role,
    email,
    img,
  };

  console.log(newMember);
  teamMembers.push(newMember);
  console.log(teamMembers);
  myCards();
}

//  una funzione per mostrare una card per ciascun teamMembers.

function myCards() {
  let template = "";
  const cards = document.getElementById("card");
  for (let i = 0; i < teamMembers.length; i++) {
    template += ` <div class="card mb-3 " style=" color:white;background-color:#E88D67" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${teamMembers[i].img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8" style=" color:white;">
      <div class="card-body">
        <h5 class="card-title">${teamMembers[i].name}</h5>
        <p class="card-text">${teamMembers[i].role}</p>
        <p class="card-text"><small style=" color:#F3F7EC;">${teamMembers[i].email}</small></p>
      </div>
    </div>
  </div>
</div>
  
 `;
  }
  // Agguingere le cards dell teamMembers alla mia paggina html/////
  cards.innerHTML = template;
}
myCards();
