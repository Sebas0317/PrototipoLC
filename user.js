/** @format */

const users = JSON.parse(localStorage.getItem("users"));
const container = document.getElementById("user-container");

users.forEach((user) => {
  container.innerHTML += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${user.surname}</h6>
        <h6 class="card-text">${user.email}</h6>
        <h6 class="card-text">${user.phone}</h6>
      <a href="#" class="card-link">Eliminar</a>
      <a href="#" class="card-link">Editar</a>
    </div>
  </div>
    `;
  // container.appendChild(userItem);
});
const userData = JSON.parse(localStorage.getItem("users")) ?? [];

container.addEventListener("click", (e) => {
  //console.log(e.composedPath()[1].childNodes[5].childNodes[0].data);

  const deleteText = e.target.innerText;

  const id = e.composedPath()[1].childNodes[5].childNodes[0].data;

  if (e.target.innerText === deleteText) {
    const findUser = userData.findIndex((find) => find.email === id);

    if (findUser !== -1) {
      userData.splice(findUser, 1);

      localStorage.setItem("users", JSON.stringify(findUser));
      e.target.parentNode.parentNode.remove();
    }
  }
});
const deleteUser = () => {};
const deleteBtn =(id,deleteText)=>{
  if(e.target.innerText === deleteText){
    const userData = JSON.parse( localStorage.getItem("users"))??[]
    const findUser= userData.findIndex((find)=>{
      find.email===id
    })
   if(findUser != -1){
    userData.slice(findUser, 1)
    deleteUser(userData); 

   }

  }
}
