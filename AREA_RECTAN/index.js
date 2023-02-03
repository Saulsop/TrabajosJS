class Area{
    altura = null;
    base = null;
    constructor(height,down){
        this.altura = height;
        this.base = down;
    }
}

function Guardar_datos(){
    Area.altura = document.getElementById("altura").value;
    Area.base = document.getElementById("base").value;
}
function Calcular_area(){
    var area = Area.altura * Area.base;
    return "El Area es: " + area;
}

function resultado(){
    alert(Calcular_area());
}