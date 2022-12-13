var Nombre = prompt("ingrese nombre porfavor");
var valHora = parseInt(prompt("ingrese el valor de la hora"));
var cantHoras = parseInt(prompt("ingrese la cantidad de horas trabajadas"));
var valorExtras = parseInt(prompt("ingrese el valor de la hora extra"));


salarioE = (cantHoras-192) * valorExtras;
salarioNeto = (cantHoras*valHora);
var pension = (salarioNeto * 0.05);
var salud = (salarioNeto * 0.05);
var salarioTotal = (salarioNeto- salud-pension);
var salarioTotalE = (salarioNeto - (salud+pension) + salarioE)
if(cantHoras <= 96){
    document.write("<h1 class='text1'>"+"No trabajó las horas requeridas" +"</h1>")
}else if (cantHoras > 97 && cantHoras <= 192){
    document.write("<h1 class='text1'>"+"Su deduccion de pension es " +pension  + "</h1>");
    document.write( "<h1 class='text1'>"+"Su deduccion de salud es " +salud+ "</h1>" );
    document.write("<h1 class='text1'>"+"Su salario total es " +salarioTotal+ "</h1>");
}else if (cantHoras>192){
    document.write("<h1 class='text1'>"+"Su deduccion de pension es " +pension + "</h1>");
    document.write( "<h1 class='text1'>"+"Su deduccion de salud es " +salud+ "</h1>" );
    document.write( "<h1 class='text1'>"+"Su salario total es " +salarioTotalE+ "</h1>");
    document.write("<h1 class='text1'>"+"El valor de las horas extras es " +salarioE + "</h1>")
    document.write("<h1 class='text1'>"+"Su total de horas extras  es " +(cantHoras-192)+ "</h1>");    
}