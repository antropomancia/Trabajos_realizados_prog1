import Cliente from "./cliente.js";

function guardar() {
  let nombre = document.getElementById("inp_nombre").value;
  let apellido = document.getElementById("inp_apellido").value;
  let dni = document.getElementById("inp_dni").value;

  // ! Se pasan los datos recién obtenidos arriba al constructor() en el cliente.js
  // !La instancia se crea con el "new Cliente" y se guarda en la variable "let cliente"
  
  let cliente = new Cliente(nombre, apellido, dni);
  cliente.guardar_cliente();
}

const boton = document.getElementById("btn_guardar");
boton.addEventListener("click", guardar);

function listar() {
  let cliente = new Cliente();
  cliente.obtener_cliente();
}

listar();

function eliminar() {
  let indice = localStorage.getItem("indice");
  let cliente = new Cliente();
  cliente.eliminar_cliente(indice);
}
document.getElementById("btn_eliminar").addEventListener("click", eliminar);

function actualizar() {
  let index = localStorage.getItem("indice_update");
  let cliente = new Cliente();
  cliente.actualizar_cliente(index);
}

document.getElementById("btn_actualizar").addEventListener("click", actualizar);
