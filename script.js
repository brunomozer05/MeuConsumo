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
      res.innerHTML = `A viagem vai custar: R$ ${val.toFixed(2)}`
      res.innerHTML += `<br>consumo de combustivel : ${litro.toFixed(2)} L`
   }
}

function comparaComb() {
   let gas = Number(document.getElementById(`gasolina`).value)
   let eta = Number(document.getElementById(`etanol`).value)
   let res = document.getElementById(`res2`)
   let val = eta / gas

   let imgDiv = document.getElementById('imgDiv');
   let img = document.createElement(`img`)
   imgDiv.innerHTML = '';
   img.style.width = '150px';
   if (gas == 0 || eta == 0) {
      alert(`[ERRO] Por gentileza, preencha os dados do formulário corretamente.`)
   } else if (val > 0.7) {
      img.src = `img/gasolina.png`
      imgDiv.appendChild(img);
      res.innerHTML = `<h2>Gasolina</h2>`
   } else {
      img.src = `img/etanol.png`
      imgDiv.appendChild(img);
      res.innerHTML = `<h2>Etanol</h2>`
   }

}