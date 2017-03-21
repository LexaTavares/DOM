function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar sesión";
}
translate();

function mostrar(){
  var correo = document.getElementById("inputEmail").value;
  var contra= document.getElementById("inputPassword").value;
  var datos = document.getElementById("mostrardatos");
  var titulo = document.getElementById("heading");

  titulo.innerHTML = "Datos de formulario";
  datos.innerHTML = "El correo electrónico es:" + correo + "</br>La clave ingresada es:" + contra;
}
