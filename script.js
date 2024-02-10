
const button = document.getElementById('btn-new-task');
const input = document.getElementById('new-task');
const listaCompleta = document.getElementById('to-do-list');

let minhaListaDeItens = [];



function adicionarNovaTarefa() {

    if(!input.value){
        alert("Insira alguma task no campo de texto")
    }else{
    minhaListaDeItens.push(input.value)

    input.value = ""

    mostrarTarefas();
}}


function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach( (tarefa, posicao) => {
        novaLi = novaLi + `
            <li> ${tarefa} <button onClick="deletarItem(${posicao})">X</button></li>
        `
    } )

    listaCompleta.innerHTML = novaLi
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    

    mostrarTarefas();
}

button.addEventListener('click', adicionarNovaTarefa)

