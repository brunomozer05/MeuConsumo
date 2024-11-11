function calcular(){
   let distancia = document.getElementById(`dist`)
   let consumo = document.getElementById(`cons`)
   let preco = document.getElementById(`preco`)
   let res = document.getElementById(`res`)
   let val = Number(distancia.value / consumo.value * preco.value)
   let litro = Number(val / preco.value)
   res.innerHTML = `A viagem vai custar: R$ ${val}`
   res.innerHTML += `<br>consumo de combustivel : ${litro.toFixed(2)} L`
}