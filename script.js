function calcular() {
   let distancia = Number(document.getElementById(`dist`).value)
   let consumo = Number(document.getElementById(`cons`).value)
   let preco = Number(document.getElementById(`preco`).value)
   let res = document.getElementById(`res`)

   if (distancia == 0 || consumo == 0 || preco == 0) {
      alert('[ERRO] Por gentileza, preencha os dados do formulário corretamente.');
   } else {
      let val = (distancia / consumo) * preco
      let litro = val / preco
      res.innerHTML = `A viagem vai custar: R$ ${val}`
      res.innerHTML += `<br>consumo de combustivel : ${litro.toFixed(2)} L`
   }
}

function comparaComb() {
   let gas = Number(document.getElementById(`gasolina`).value)
   let eta = Number(document.getElementById(`etanol`).value)
   let res = document.getElementById(`res2`)
   let val = eta / gas


   if (val > 0.7) {
      res.innerHTML = `Gasolina`
   } else {
      res.innerHTML = `Etanol`
   }

}