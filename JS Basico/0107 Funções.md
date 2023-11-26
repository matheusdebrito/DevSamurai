
Usando funções para otimizar o código
Até agora você entendeu o fluxo de um programa simples que é basicamente definir variáveis, receber
valores e executar algo com isso.
A má notícia é que quanto mais complexo o programa vai ficando, mais é difícil de manter e adicionar novas
funcionalidades.
Por isso é importante você entender como organizar corretamente o seu código e permitir reutilizá-los.
Imagine o exemplo da nossa calculadora:
var x = 10; 
var y = 20; 
 
var resultado = x + y; 
 
console.log(resultado); 
A operação de soma precisa ser melhor "reutilizada", sendo assim podemos criar uma função para tal.
As funções são espaços de código com um "nome" escolhido pelo programador (vide as regras de nome)
que podem ser invocadas pelo programa principal. É como uma caixa de ferramentas, no momento certo
você abre a caixa e escolhe a ferramenta mais adequada para o serviço.
Se você precisar de um martelo, não necessita se preocupar em fabricar o cabo, basta martelar seu dedo!
Com funções é o mesmo conceito, elas ficam armazenadas na "caixa de ferramentas" prontas para o uso do
programa principal.
Como criar uma função?
No JavaScript você precisa definir uma função utilizando a palavra-chave function, veja:
var soma = function(x, y) { 
    var resultado = x + y; 
    return resultado; 
} 
 
console.log(soma(10, 20)); 
As funções podem receber uma série de parâmetros de entrada (no exemplo x e y) ou então não receber
nada (bastando deixar os () vazios).
O corpo da função deve conter os códigos que você deseja executar, no exemplo acima a soma. E também
caso seja aplicável um retorno de valor com o return (como é necessário na função de exemplo).
Veja uma função "útil" utilizada para fins diversos:
var plim = function() { 
    console.log("Plim plim..."); 
} 
 
plim(); 
Como você pode ver no exemplo acima a função [in]útil não recebe parâmetros e também não retorna nada.
Apenas executa comandos.
Parâmetros e escopos
Os parâmetros de uma função se comportam como variáveis locais. Isso quer dizer que você utiliza apenas
dentro da função declarada.
Essa característica de localidade de uma função aplica somente a parâmetros e variáveis que forem
declaradas dentro da função usando o var. Variáveis declaradas fora do contexto da função ({}) são
chamadas de variáveis globais.
As variáveis globais podem ser acessadas e alteradas no contexto da função desde que não tenham sido
redeclaradas dentro da função.
Veja:
var x = "variável global"; 
 
var f1 = function() { 
    x = "variável da função 1"; // altera a variável global a primeira vez 
} 
f1(); 
 
var f2 = function() { 
    x = "variável da função 2"; // altera a variável global a primeira vez 
} 
f2(); 
 
console.log(x); 
// → variável da função 2 
Agora iremos redeclarar a mesma variável dentro de cada função:
var x = "variável global"; 
 
var f1 = function() { 
    var x = "variável da função 1"; 
} 
f1(); 


let f2 = () => {
    // código
}

f2()