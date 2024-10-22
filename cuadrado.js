console.log ("----------01----------")
console.log ("AREA DEL CUADRADO")
let ladoC = 6
let rC = ladoC * ladoC
console.log ("el area del cuadrado es: ", rC)

console.log ("----------02----------")
console.log ("AREA DEL TRIANGULO")
let B = 4
let H = 55
let rT = (B * H) /2
console.log ("el area del triángulo es: ", rT) 

console.log ("----------03----------")
console.log ("AREA DEL RECTAGUNLO")
let Br = 6
let Hr = 5
let rR = B * H
console.log ("el area del Rectangulo es: ", rR) 

console.log ("----------04----------")
console.log ("AREA DEL ROMBO")
let DM = 4
let DMN = 5
let rombo = (DM * DMN) /2
console.log ("el area del rombo es: ", rombo) 

console.log ("----------05----------")
console.log ("AREA DEL CIRCULO ")
let Radio = 4
let rcirculo= (Radio **2 ) * 3.1416
console.log ("el area del circulo es: ", rT) 

console.log ("----------------------")
function areaTrian(B,H){
    return rT =(B*H)/2
}
console.log (areaTrian(5,6))