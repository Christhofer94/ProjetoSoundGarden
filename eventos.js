// MODAL



const openModalButton = document.querySelector(".btn");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide")
  fade.classList.toggle("hide")
};

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal())
});



// POST



function fazPost(url, body){
  console.log("body", body)
  let request = new XMLHttpRequest() 
  request.open("GET", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))
  

  request.onload = function() {
      console.log(this.responseText)
  }

  return request.responseText
}


function reservaIngresso() {
  event.preventDefault()
  let url = "https://xp41-soundgarden-api.herokuapp.com/bookings"
  let owner_name = document.getElementById("owner_name").value
  let owner_email = document.getElementById("owner_email").value
  console.log(owner_name)
  console.log(owner_email)



  body = {
      "owner_name": owner_name,
      "owner_email": owner_email,
      "number_tickets": 1,
      "event_id": ""
  }

  fazPost(url, body)
} 






const containerShow = document.querySelector("#idDiv")

async function getShow() {
   const resposta = await fetch("https://xp41-soundgarden-api.herokuapp.com/events");
   const dados = await resposta.json();
   console.log(dados);



   

//----------------------------------------------------


 

//------------------------------------------------------


dados.map((shows) => {

   

    const article = document.createElement("article");
    const name = document.createElement("h2");
    const poster = document.createElement("img")
    const attraction = document.createElement("h4");
    const description = document.createElement("p");
    const link = document.createElement("a");

  
 
    name.innerText = shows.name + " - " + new Date(shows.scheduled).toLocaleDateString();
    ;
    attraction.innerText = shows.attractions;
    poster.src = shows.poster;
    description.innerText = shows.description;
    link.classList.add("btn")
    link.classList.add("btn-primary")
    link.innerText = "reservar ingresso"
    link.addEventListener("click", toggleModal)

    
 
    article.appendChild(name);
    article.appendChild(poster);
    article.appendChild(attraction);
    article.appendChild(description);
    article.appendChild(link);


    article.classList.add("evento");
    article.classList.add("card");
    article.classList.add("m-3");
    article.classList.add("p-5");
 
    


    containerShow.appendChild(article);
   
   
   
      
   });
}


getShow();

