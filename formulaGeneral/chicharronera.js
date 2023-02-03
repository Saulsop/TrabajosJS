class Formula {
    varA;
    varB;
    varC;
    constructor(vA,vB,vC){
        this.varA = vA;
        this.varB = vB;
        this.varC = vC;
    }
    
  }
  function Save() {
    Formula.varA = document.getElementById("varA").value;
    Formula.varB = document.getElementById("varB").value;
    Formula.varC = document.getElementById("varC").value;
    
  }

  function Calculate(){
    var n1 = (Formula.varB*Formula.varB - 4*Formula.varA*Formula.varC);
    var Resulpositive = (-Formula.varB + Math.sqrt(n1))/(2*Formula.varA);
    var Resulnegative = (-Formula.varB - Math.sqrt(n1))/(2*Formula.varA);
    return "+: "+ Resulpositive + "\n" + "-: " + Resulnegative  ;
  }

  function resultado(){
    alert(Calculate());
}