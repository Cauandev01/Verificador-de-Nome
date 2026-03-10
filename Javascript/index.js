const clicar = document.getElementById("botao")
clicar.addEventListener("click", function(){

    const nome = document.getElementById("nome").value
    document.getElementById("resposta").innerHTML =`O seu Nome é: <b>${nome}</b>
    <br> Seu nome tem <b>${nome.length}</b> caracteres
    <br> A segunda letra do seu nome é: <b>'${nome[1].toUpperCase()}'</b>
    <br> Qual o primeiro índice da Letra 'a' no seu nome?: <b>${nome.indexOf("a")}</b>
    <br> Qual o último índice da letra 'a' no seu nome?: <b>${nome.lastIndexOf("a")} </b>
    <br> As últimas 3 letras do seu nome são: <b> ${nome.slice(-3)}</b>
    <br> As palavras do seu nome são: <b>${nome.split("")}</b> 
    <br> Seu nome em letras maiúsculas: <b> ${nome.toUpperCase()} </b>
    <br> Seu nome em letras minúsculas: <b> ${nome.toLowerCase()} </b>`
    
})