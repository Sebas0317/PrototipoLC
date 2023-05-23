const form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  let name, email, subject,coment;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  subject = document.getElementById("subject").value;
  coment = document.getElementById("coment").value;

  let user_coment = JSON.parse(localStorage.getItem("comments")) || [];

  // Validando los campos
 if (name.length < 4) {
    alert("El nombre debe tener al menos 4 letras");
  } else if (subject.length < 4) {
    alert("El asunt debe de tener mas de 15 letras");
  } else if (coment.length < 6) {
    alert("El comentario debe de tener mas de 30 caracteres");
  } else if (!email.includes("@")) {
    alert("El correo electrónico debe incluir un símbolo @");
  } else {
    user_coment.push({
      name: name,
      email: email,
      subject: subject,
      coment: coment,
    });
    localStorage.setItem("comments", JSON.stringify(user_coment));

    alert("El comentario ha sido enviado correctamente");
  }
})