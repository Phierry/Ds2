function consultaCep(){
    let campo = document.querySelector("#cep");
    let requisicao = new  XMLHttpRequest();
    let url ="https://viacep.com.br/ws/"+ campo.value +"/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function(){
        let objetoCEP = JSON.parse(requisicao.response)
         let campoEndereco = document.querySelector("#logradouro")
         campoEndereco.value = objetoCEP.logradouro

         let campoUF = document.querySelector("#uf")
         campoUF.value = objetoCEP.uf

         let campoBairro = document.querySelector("#bairro")
         campoBairro.value = objetoCEP.bairro

         let campoComplemento = document.querySelector("#complemento")
        campoComplemento.value = objetoCEP.complemento

    }
}
