
const botaoEvento = document.getElementById('novoEvento');

async function excluirEvento(e) {
let parm = location.search.split('=')

let parms1 = parm[1]
console.log(parms1)
e.preventDefault();
let req = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${parms1}`, {
  method: 'DELETE',

  headers: {
    'Content-Type': 'application/json'
  }  
});
location.replace('admin.html')
let json = await req.json();

};

botaoEvento.onclick = excluirEvento;