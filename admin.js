const section = document.getElementById('listaEventos')

async function listarEventos(){
    const response = await fetch(
        `https://xp41-soundgarden-api.herokuapp.com/events`,
        {
        Headers: {
            'Content-Type': 'application/json'
        }
    }
);



const eventos = await response.json();


eventos.forEach((evento) => {
    const date = evento.scheduled;
    const date2 = new Date(date).toLocaleDateString();
    
    
    const cardEventos = `<tr >
    <th scope="row" id="inicio">*</th>
    <td >${date2}</td>
    <td >${evento.name}</td>
    <td >${evento.attractions}</td>
    <td >
        <a href="reservas.html" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
    </td>
</tr>
`;

section.innerHTML += cardEventos;


});
console.log(eventos)
}

listarEventos();