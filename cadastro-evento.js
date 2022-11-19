 
  const nomeEvento = document.getElementById('nome');
  const posterEvento = document.getElementById('poster')
  const atracoesEvento = document.getElementById('atracoes');
  const descEvento = document.getElementById('descricao');
  const dataEvento = document.getElementById('data');
  const totalEvento = document.getElementById('lotacao');
  const botaoEvento = document.getElementById('novoEvento');

  
  
 

  async function inserirEvento(e) {
  e.preventDefault();
  let req = await fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
    method: 'POST',
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

botaoEvento.onclick = inserirEvento;