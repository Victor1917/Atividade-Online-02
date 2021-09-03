
// Palestrante informado
let palestrante = "Otavio Junior"


//data e hora do evento informardas pelo usuário
var dataDoEvento = new Date(2021,08,28,10,09);
var hoje = new Date();

console.log("Data de hoje: " + hoje)
console.log("Data do evento: " + dataDoEvento);
if (dataDoEvento >= hoje){
    console.log('Cadastro permitido para a data informada.');
}else{
    console.log('Cadastro não permitido por data e hora inválidas.');
}
// idade informada pelo participante
let idade = 18
console.log("Idade do participante: " + idade)
if (idade >= 18){
    console.log('Cadastro permitido pela idade.');
}else{
    console.log('Cadastro não permitido pela idade.');
}


//Nome inserido do participante
let participante = "Soares Almeida"

// Lista existente de participantes
let listaDeParticipantes = ["Marcelo Castro", "Juh K" , "Cleber S", "Wesley V", "Adriano Pb"]

//Incluir novo participante
var resultado = listaDeParticipantes.push(participante);

// Listar palestrante e participantes
console.log("Palestrante: " + palestrante)
console.log("Lista de participantes:")
for (const participante  of listaDeParticipantes) {
    console.log(participante)
}

// Não permitir mais de 100 participantes
// Informar quantidade cadastrada e vagas existentes
console.log("Número de participantes cadastrados: " + listaDeParticipantes.length)
var qts = 100 - listaDeParticipantes.length
if(listaDeParticipantes.length < 100) {
  console.log("É possível ainda cadastrar " + qts + " participante(s).")
} else {
  console.log("Não há mais espaço na lista de participantes.")
}
