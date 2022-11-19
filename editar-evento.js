const nomeEvento = document.getElementById('nome');
const posterEvento = document.getElementById('banner')
const atracoesEvento = document.getElementById('atracoes');
const descEvento = document.getElementById('descricao');
const dataEvento = document.getElementById('data');
const totalEvento = document.getElementById('lotacao');
const botaoEvento = document.getElementById('novoEvento');





async function editarEvento(e) {
let parm = location.search.split('=')

let parms1 = parm[1]
console.log(parms1)


e.preventDefault();
let req = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${parms1}`, {
  method: 'PUT',
  body: JSON.stringify({
    name: nomeEvento.value,
    poster: posterEvento.value,
    attractions: atracoesEvento.value.split(','),
    description: descEvento.value,
    scheduled: (dataEvento.value),
    number_tickets: Number(totalEvento.value),
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

let json = await req.json();

location.replace('admin.html')

};

botaoEvento.onclick = editarEvento;
