var alumno = {
  nombre: null,
  apellido: null,
  fecha_nac: null,

  saluda() {
    return  "Hola mi nombre es: "+ this.nombre +" "+ this.apellido + " mucho gusto";
  }

}

function saveStudent() {
  alumno.nombre = document.getElementById("name").value;
  alumno.apellido = document.getElementById("lastname").value;
  alumno.fecha_nac = document.getElementById("yearNac").value;

}
function calcular_edad(){
    var edad =  2023 - alumno.fecha_nac;

    return "tu edad es: " + edad;
    
    
}

function saludar(){
    alert(alumno.saluda());
    alert(calcular_edad());

}
