let cadastro= [];

let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let indice= ["Nome", "idade"]

function criaTag(elemento){
    return document.createElement(elemento);
}
function criaCelula(tag, text){
    tag= criaTag(tag);
    tag.textContent= text;
    return tag;
}
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
 
function cadastrar(){
    
    var add = new Pessoa(nome.value, idade.value )
    cadastro.push(add)
    localStorage.setItem("cadastro",JSON.stringify(cadastro))
    nome.value = null;
    idade.value = null;
       
}
function aparecer(){
    window.location.href="tela.html"
}
function mostrar(){
    let informacao=JSON.parse(localStorage.getItem("cadastro"));
    let tabela= document.getElementById('tabela');
    let thead=criaTag("thead");
    let tbody=criaTag("tbody");
    let linhaHead= criaTag("tr")
    for(let i=0;i<indice.length;i++){
        let th=criaCelula("th",indice[i])
        linhaHead.appendChild(th)
    }
    for(let i=0; i<informacao.length;i++){
        let linhaBody=criaTag("tr");   
        let cel= criaCelula("td",informacao[i].nome)
        let cel1= criaCelula("td", informacao[i].idade)
            linhaBody.appendChild(cel)
            linhaBody.appendChild(cel1)
            tbody.appendChild(linhaBody)
    }
    
       
            

    thead.appendChild(linhaHead)
    tabela.appendChild(thead)
    tabela.appendChild(tbody)
}