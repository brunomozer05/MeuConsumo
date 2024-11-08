function calcular(){
   let distancia = document.getElementById(`dist`)
   let consumo = document.getElementById(`cons`)
   let preco = document.getElementById(`preco`)
   let res = document.getElementById(`res`)
   let val = Number(distancia.value / consumo.value * preco.value)
   res.innerHTML = `R$ ${val}`

}