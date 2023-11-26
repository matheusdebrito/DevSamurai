Usando funções para otimizar o código


Até o momento aprendemos a utilizar a parte básica de funções, que se resume em criar e utilizar dentro do
código.
Nesta etapa vamos fazer o "bicho pegar" e explorar o lado negro das funções 
Funções e desvios de fluxos
As funções podem ser atribuídas a variáveis. Isso quer dizer que de certa forma podemos alterar o
funcionamento do programa principal caso a variável que armazena a função seja sobrescrita.
Veja este caso americano:
var pais = 'ALGUM'; 
 
var lancarMissilNuclear = function() { 
    console.log("Lançando míssil em 3..2..1"); 
} 
 
if (pais == 'RUSSIA') { 
  lancarMissilNuclear = function() { 
      console.log("Usar o telefone vermelho..."); 
  } 
} 
 
lancarMissilNuclear(); 
// → Lançando míssil em 3..2..1 
Esta característica única do JavaScript permite fazer muitas coisas interessantes que iremos aprender mais
para frente, entre elas algo chamado Metaprogramação.
Pilha de chamadas
Para permitir o uso de funções, o JavaScript (assim como outros) implementa uma pilha de chamadas (call
stack).
Esta pilha de funções funciona como uma espécie de "GPS" para o compilador. A cada chamada é
armazenado na call stack a posição da função atual, para que ao terminar a execução o compilador possa
continuar executando de onde parou.
Veja:
function ola(quem) { 
    console.log("Olá " + quem); 
} 
ola("Fulaninho"); 
console.log("Tchau"); 
A pilha de funções do programa acima se resume em:
Principal
ola
console.log
ola
Principal
console.log
Principal
O armazenamento dessa pilha de chamadas necessita de espaço na memória do computador, que no caso
é limitada a poucos bytes. Quando a pilha aumenta de tamanho e "estoura" teremos a mensagem maximum
call stack size exceeded.
Veja um programa que tenta desvendar um mistério do universo:
function galinha() { 
  return ovo(); 
} 
 
function ovo() { 
  return galinha(); 
} 
console.log(galinha() + " veio primeiro."); 
Argumentos opcionais
É bastante comum algumas funções implementarem parâmetros opcionais. O próprio alert implementa e
executa sem problemas, veja:
alert("Olá", "Tudo bem?", "Como vai!?"); 
Oficialmente a função alert exibe apenas uma mensagem na tela (nesse caso o "Olá"), mas aceita sem
problemas os outros parâmetros.
Esse comportamento é válido para parâmetros excessivos ou ausentes, como é o caso da função abaixo:
var ola = function(quem) { 
    console.log("Olá " + quem); 
} 
ola("Felipe"); 
// → Olá Felipe 
 
