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