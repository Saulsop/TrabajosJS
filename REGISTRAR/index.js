class Persona {
  nombre;
  Apellido;
  F_nac;
  #Curp;
  #Rfc;
}
function savePerson() {
  Persona.nombre = document.getElementById("name").value;
  Persona.Apellido = document.getElementById("lastname").value;
  Persona.F_nac = document.getElementById("yearNac").value;
  Persona.Curp = document.getElementById("Curp").value;
  Persona.Rfc = document.getElementById("RFC").value;
}
function rfc() {
  return "RFC: " + Persona.Rfc;
}

function genero() {
  
   Persona.Curp.split("");
  let h = 'H';
  let m = 'M';
        
    for (i = 9; i < 11; i++) {
      if (h == Persona.Curp[i]) {
        return "Hombre";
      } else {
        if (m == Persona.Curp[i]) {
          return "Mujer";
        }else
        return "Genero desconocido";

      }
    }
  }

function edad() {
  var calcular_edad = 2023 - Persona.F_nac;
  return "la edad es : " + calcular_edad;
}

function mostrar_rfc() {
  alert(rfc());
}
function mostrar_edad() {
  alert(edad());
}
function mostrar_genero() {
  alert(genero());
}
