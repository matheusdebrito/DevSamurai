
Tornando seu programa mais inteligente
Todos os programas normalmente executam os comandos de cima para baixo. Isso significa que as
funções/comandos vão sendo chamados, executados e retornando valores. Essa é uma dinâmica de
execução linear. 
Sendo assim um programa que apenas executa algo sem ter a capacidade de se adaptar raramente seria
útil. 
O exemplo mais sofisticado onde essa execução linear não nos serviria é um sistema de controle de entrada
de um shows/casas noturnas. 
A regra é o seguinte: apenas pessoas com 18 anos ou mais poderão entrar no saguão do show. Sendo
assim, menores de 18 não entram. 
Colocando esta regra no programa fictício de controle de shows, a lógica seria: "Se a idade do indivíduo >=
18, então entra, senão é barrado" 
E escrito de forma mais estruturada seria:
SE idade > 18 ENTÃO 
  liberaCatraca(); 
SENÃO 
  barraCatraca(); 
FIM SE 
Se você perceber o pseudo-código acima executou um desvio de fluxo, esse programa não "passará" pelos
dois caminhos ao mesmo tempo. Ele terá condições de executar um ou outro com base no parâmetro de
inteligência fornecido a ele.
Uma estrutura de decisão
Uma estrutura de decisão é justamente isso, algo que possa dar a liberdade de seguir o caminho A ou B em
um programa. 
No JavaScript para temos o comando IF, que é o comando que permite esse desvio de fluxo. 
Sua sintaxe básica é da seguinte forma:
if (idade >= 18) { 
    console.log("Libera catraca"); 
} else { 
    console.log("Barra catraca"); 
} 
E se você perceber, o código acima está bem próximo do nosso pseudo-código rudimentar.
Um IF simples
Nenhum IF é obrigado por lei a ter um ELSE, isso significa que ele pode ser tão simples quanto isso:
if (idade >= 18) { 
    console.log("Parabéns você já pode dirigir."); 
} 
O uso do ELSE é utilizando quando queremos ter uma opção contrária do teste inicial. E caso queira "pegar
esses meninos que dirigem o carro dos pais", seria dessa forma:
if (idade < 18) { 
    console.log("Vai em cana moleque."); 
} 
Se você perceber, o IF acima foi apenas "o contrário" do outro.
Operadores de comparação no IF
Como já vimos na aula passada nós temos os seguintes operadores de comparação no cardápio:
Igual (==)
Diferente (!=)
Menor (<) ou Menor igual (<=)
Maior (>) ou Maior igual (>=)
Sendo assim, o nosso programa poderá contar com um menu completo para seu desvio de fluxo. Veja os
exemplos com os diversos tipos de operadores de comparação:
if (idade == 18) { 
    console.log("Parabéns pelos 18 anos, amanhã não terá meu abraço."); // executa 
a mensagem apenas quando a idade for exatamente 18 anos. 
} 
if (idade != 18) { 
    console.log("Meu abraço é para quem tem 18 anos, você não tem hoje."); // 
executa a mensagem apenas quando a idade for diferente de 18 anos. 
} 
if (idade > 18) { 
    console.log("Poxa parabéns atrasado."); // executa a mensagem apenas quando a 
idade for maior que 18 anos e 1 segundo. 
} 

If ternário Exemplo : let idade = 18
                      idade >= 18 ? console.log("maior") : console.log("menor")
    