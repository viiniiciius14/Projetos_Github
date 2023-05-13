//----------------Day/1---------------------//
//Day 1 - Conceitos basicos de javascript - sintaxe, tipos de dados, funções e estrutura de controle de fluxo(if,else,while). (8/5/23)//

/*
var firstName;
var lastName;

firstName = 'vini';
lastName = 'lima';

let fullName = firstName + ' ' + lastName;

console.log(fullName);
*/

/*
const cars = ["bmw", "ferrari", "audi"];
let x = cars[1];

console.log(x);
*/ //Exwmplo de variavel


//Function void - Quando não retorna nada//
 /*let valor = 30;

 function msg() {
    console.log('Function void - Função que não retorna nada.');
 }

 console.log(valor);
 msg()
 */

/*
 //Function com parametro - quando é passado um parametro ele executa essa função para retonar algo.//

 function soma(num1, num2) {
    const soma = num1 + num2;
    return soma
 }
 const result = soma(30, 40);
 console.log(result); 
 */
/*
// Arrow Function - é apenas uma sintaxe mais recente para utilizar uma função em javascript.//
 
const multi = (num1, num2) => {
    const result = num1 * num2;
    return result
}
console.log(multi(5,5));
*/


//----------------Day/2---------------------//

/*
//Day 2 - Variaveis em javascript e a diferença entre elas(var, let, const), escopo e hoisting. (9/5/23)

let message;
message = 'helloWorld!';

console.log(message);

// com a variavel let podemos declarar e atribuir um valor a ela no futuro e é uma variavel de escopo local(restrito ao bloco em que foi declarada).//

const name = 'vini';
console.log('name');

// usando a variavel const não podemos alterar ou atribuir um novo valor a ela.//


var usuario;
usuario = 'vini';

function msg() {
   console.log(`Olá ${usuario} seja bem vindo!`);
}
msg()

// a variavel var é um tipo de variavel mais antiga na linguagem porem a unica diferença entre as outras é que var é variavel de escopo global(não precisa atribuir novamente dentro de um bloco).//


//Escopo - Exemplo, podemos declarar uma variavel com o mesmo nome e utilizar normalmente sem nenhum conflito entre elas, pois se eu declarar uma variavel x com valor y no escopo global e depois delcarar essa mesma variavel x e com outro valor y não terá conflito pois elas estarão em um escopo local(dentro de uma função).

Ex. 
var num = 10;
console.log(num); 

function scopLocal() {
   var num = 25;
   return num
}
console.log(scopLocal())

//Hoisting - Hoisting em JavaScript é um comportamento onde declaração de uma variavel ou função sobe para o topo do escopo(local ou global). Por isso o ideal é declarar variaveis no topo de seus respectivos espocos. 
//Ex.

name = 'vini';
console.log(`O nome do usuario atual é ${name}.`);
var name;

// Neste exemplo o javascript pega a declaração da variavel "joga no topo"(içadas) deste escopo(global) e por isso funciona normalmente. E importante lembrar que hoisting funciona apenas com o tipo de variael "var", com let ou const não é possivel executar. Por isso é recomendavel usar let ou var pois uma pessoa que não tem conhecimento de hoisting não iria compreender como o codigo está sendo executado e tambem pode causar bugs.

Resumo Conteudo de hoje(9/5/23) - Variaveis são em javascript var, let e const onde podemos armazenar dados e utilizar no codigo para facilitar e deixar a leitura do codigo mais limpa, a variavel do tipo var é uma variavel mais antiga na linguagem e com isso tem suas vantaens e desvantagens, exemplo a variavel do tipo var podemos utilizar ela no codigo como escopo global onde posso reutilizar a mesma variavel em um escopo local ou vise versa ja a variavel let é uma variavel onde podemos utilizar no escopo onde é declarada e podemos delcarar e atribuir um valor a ela depois que é a diferença entre ela e variavel const onde não podemos reatribuir um valor a ela, se for utilizar a variavel const devemos declarar o valor a ela naquele momento sabendo que não podera ser um valor que seja alterado futuramente. 
Escopo - É basicamente onde utlizamos nosso codigo, se for utilizado dentro de uma função entao é um escopo local onde tal comando de codigo so podera ser utilizado quando esta função for invocada no codigo, exemplo se eu declarar duas variaveis e cada uma contem um valor e quero fazer a soma ou multiplicação do valor dessas suas variaveis então eu crio uma função onde eu pego o valor dessas variaveis e dentro do escopo desta função eu faço a expressão aritimetica que eu desejar. 
Hoisting é um comportamento do javascript que faz com que o codigo seja excutado normalmente mesmo quando uma variavel seja declarada no final do codigo, exemplo se eu pegar uma variavel nome e colocar para imprimir primeiro e depois declarar qual o valor dessa variavel o codigo sera executado normalmente e o valor será imprimido pois o javascript pega a declaração desta variavel e joga para o topo do escopo onde se encontra esta variavel que isso se chama "içamento".


//----------------Day/3---------------------//

/*
//DOM - Document Object Model é a forma que utilizamos para fazer alterações, adicionar elementos e deletar tamebem, criar interações e animações no html atraves do javascript, podemos alterar a cor de um botão ou o background por exemplo. Para fazer isso temos que selecionar o elemnto que desejamos manipular e para fazer isso podemos utilizar o ID(getElementbyId), nome da tag (getElementbyTagName), pela classe(getElementbyClassName), por seletores css(QuerySelector) e tambem podemos selecionar um elemento por coleções de objetos. Dom tem inumeras ferramentas que podemos utilzar para alterar o HTML atraves de javascript. 

//Funções de ordem superior ou High order function - High order function é uma forma de utilizar uma função dentro de uma função. Por exememplo..

function double(number) {
   return number * 2
};
console.log(double(9));
// neste exemplo podemos dobrar o numero apenas por 2.

function getMulti(multiplicação) {
   return function (Number) {
      return Number * multiplicação
   }
}
const double = getMulti(2);
const triple = getMulti(3);
const quad = getMulti(4);

console.log(double(40));
// neste expemplo temos uma função que recebe o parametro do numero que ira multiplicar e dentro desta função temos uma função que recebe o numero que será multiplicado, e em seguida temos 3 variaveis que recebe o parametro para dobrar, triplicar e quadriplicar o parametro(numero) que terá no parametro numero(onde recebe o valor para ser multiplicado)  e isso é um exemplo do que é high order function que diferente do primeiro ele não multiplica apenas por um valor.
*/
