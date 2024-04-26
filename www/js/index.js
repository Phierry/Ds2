function consultaCep(){
    let requisicao = new  XMLHttpRequest();
    let url ="https://viacep.com.br/ws/17054267/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        alert(JSON.parse(requisicao.response).logradouro);
    }
}
let botão = document.querySelector("#botão")
botão.addEventListener("click", consultaCep);