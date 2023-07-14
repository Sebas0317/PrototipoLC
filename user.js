const users = JSON.parse(localStorage.getItem("users"));
const container = document.getElementById("card-container");

users.forEach((user, index) => {
  container.innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${user.surname}</h6>
        <h6 class="card-text">${user.email}</h6>
        <h6 class="card-text">${user.phone}</h6>
        <a href="#" class="card-link">Eliminar</a>
        <button type="button" id="openModalBtn${index}" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-email="${user.email}">
          Editar
        </button>
      </div>
    </div>
  `;
});
