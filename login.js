/** @format */

function makeRegister(event) {
  event.preventDefault();
  // Traer los datos de los input
  let name, surname, email, phone, password, repeatPassword;
  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  email = document.getElementById("registerEmail").value;
  phone = document.getElementById("phone").value;
  password = document.getElementById("registerPassword").value;
  repeatPassword = document.getElementById("repeatPassword").value;

  let user_record = JSON.parse(localStorage.getItem("users")) || [];

  // Validando los campos
  if (user_record.some((v) => v.email == email)) {
    alert("Ya existe otro usuario con el mismo correo");

  } else if (name.length < 4) {
    alert("El nombre debe tener al menos 4 letras");

  } else if (surname.length < 4) {
    alert("El apellido debe tener al menos 4 letras");

  } else if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");

  } else if (password !== repeatPassword) {
    alert("Las contraseñas no coinciden");

  } else if (!email.includes("@")) {
    alert("El correo electrónico debe incluir un símbolo @");
    
  } else {
    user_record.push({
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(user_record));
    alert("Usuario registrado exitosamente");
    window.location.href = "perfil.html";
  }
}

function makeLogin(event) {
  event.preventDefault();
  let email, password;
  email = document.getElementById("loginEmail").value;
  password = document.getElementById("loginPassword").value;

  let user_record = JSON.parse(localStorage.getItem("users"));

  if (
    user_record.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    let current_user = user_record.filter((v) => {
      return v.email == email && v.password == password;
    })[0];

    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href = "perfil.html";
  } else {
    alert("Comprueba los datos");
  }
}

function deleteButton() {
  if (localStorage.getItem("users")) {
    let loginBtn = document.getElementById("login-btn");
    let registerBtn = document.getElementById("register-btn");
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";

    let logoutBtn = document.createElement("button");
    let greeting = document.createElement("h1");
    let nav = document.getElementsByClassName("nav")[0];
    
    let users = JSON.parse(localStorage.getItem("users"));
    // foreach(users[0])
    console.log(users)
    greeting.textContent = "Hola " + users[0].name +  users[0].surname;

    logoutBtn.textContent = "Cerrar sesión";
    logoutBtn.addEventListener("click", function () {
      localStorage.clear();
      window.location.reload();
    });

    nav.appendChild(greeting);
    nav.appendChild(logoutBtn);
    return true;
  } else {
  
    return false;
  }
}

  // 
