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
//  una funzione per mostrare una card per ciascun teamMembers.
let template = "";
const cards = document.getElementById("card");
function myCards() {
  for (let i = 0; i < teamMembers.length; i++)
    template += ` <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${teamMembers[i].img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${teamMembers[i].name}</h5>
        <p class="card-text">${teamMembers[i].role}</p>
        <p class="card-text"><small class="text-body-secondary">${teamMembers[i].email}</small></p>
      </div>
    </div>
  </div>
</div>
  
 `;
}
myCards();

// Agguingere le cards dell teamMembers alla mia paggina html/////
cards.innerHTML = template;

// Creazione d'un titolo
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
