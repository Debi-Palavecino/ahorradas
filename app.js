///totales por categorias
//
//const ganancia = operaciones.filter((elemento)=>{
 // return elemento.tipo==="ganancia"
//  })
//
//console.log(ganancia)

//const gastos = operaciones.filter((elemento)=>{
  //return elemento.tipo==="gasto"
//  })
//
//console.log(gastos)
//
//
//const sumarGastos = gastos.reduce ((acc,elemento)=>{
 // return acc + elemento.monto
//},0)
//
//console.log (sumarGastos)
//
//
//const sumarGanancia = ganancia.reduce ((acc,elemento)=>{
 // return acc + elemento.monto
//},0)
//
//console.log (sumarGanancia)
//

//const sumarGanancia = ganancia.reduce ((acc,elemento)=>{
 // return acc + elemento.monto
//},0)
//
//console.log (sumarGanancia)
//
//const total = sumarGanancia - sumarGastos
//
//
//console.log(total)
//
//
//const div = document.querySelector("#div")
//const html = operaciones.reduce((acc,elemento)=>{
//  return acc + `<p>gastos ${sumarGastos}</p>
//  <p>ganancias ${sumarGanancia}</p>
//  <p> total ${total}</p>
//  ` 
//})
//
//
//div.innerHTML = html

const operacion = [
  {
  categoria: "veterinario",
  monto: 10000,
  tipo:"gasto"
},
{
  categoria: "Trabajo",
  monto: 7000,
  tipo:"ganancia"
},
{
  categoria: "comida",
  monto: 1000,
  tipo:"gasto"
},
{
  categoria: "diversion",
  monto: 500,
  tipo:"gasto"
}]

console.log("hola")





