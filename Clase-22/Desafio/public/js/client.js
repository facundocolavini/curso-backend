const socket = io();
const formAddGame = document.getElementById('addGame');
const containerTable = document.getElementById('products-container');
const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/productos-test');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

socket.on(
  'allGames',
  getProducts().then((data) => {
    containerTable.innerHTML = data
      .map((game) => {
        return `
        <div class="table-responsive">
        <table class="table table-dark">
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Foto</th>
            </tr>
            <tr>
                <td>${game.name}</td>
                <td>${game.price}</td>
                <td>${game.stock}</td>
                <td class="align-middle">
                    <img class="img-fluid" src=${game.url} alt=${game.name}/>
                </td>
            </tr>
           
        </table>
    </div>
        `;
      })
      .join(' ');
  })
);

/* socket.on('allgames', (games) => {
  let html;
  fetch('partials/table.hbs')
    .then((respuesta) => respuesta.text())
    .then((hbs) => {
      const template = Handlebars.compile(hbs);
      html = template({ games });
      containerTable.innerHTML = html;
    });
}); */

socket.on('allgames', (games) => {
  //Aca llamo al model para gestionarlo con mongo y hacer el insert
});
formAddGame.addEventListener('submit', (e) => {
  e.preventDefault();
  const game = {
    name: formAddGame[0].value,
    price: formAddGame[1].value,
    image: formAddGame[2].value,
  };
  socket.emit('newGame', game);
  formAddGame.reset();
});

//-------- Chat -------------------//

const inputMessage = document.getElementById('message');
const inputEmail = document.getElementById('email');
const btnSend = document.getElementById('btnSend');

const formSendMsg = document.getElementById('formSendMsg');
formSendMsg.addEventListener('submit', (e) => {
  e.preventDefault();

  const msg = {
    de: inputEmail.value,
    mensaje: inputMessage.value,
  };
  socket.emit('newMsg', msg);
  formSendMsg.reset();
  inputMessage.focus();
});

function toHtml(arr) {
  return arr
    .map((msg) => {
      return `
            <div>
                <b style="color:blue;">${msg.de}</b>
                [<span style="color:brown;">${msg.date}</span>] :
                <i style="color:green;">${msg.mensaje}</i>
            </div>
        `;
    })
    .join(' ');
}
socket.on('msgAll', (msgs) => {
  const html = toHtml(msgs);
  document.getElementById('chat-container').innerHTML = html;
});

inputEmail.addEventListener('input', () => {
  const email = inputEmail.value.length;
  const msg = inputMessage.value.length;
  inputMessage.disabled = !email;
  btnSend.disabled = !email || !msg;
});

inputMessage.addEventListener('input', () => {
  const msg = inputMessage.value.length;
  btnSend.disabled = !msg;
});
