/*1) Observe o trecho de código abaixo:

(...)

Ao final do processamento, qual será o valor da variável SOMA? */

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k += 1;
    soma = soma + k;
}

console.log(soma); //91

//variável soma = 91;

/*2) Dado a sequência de Fibonacci, 
informado um número, 
ele calcule a sequência de Fibonacci 
[e retorne uma mensagem avisando se o número informado pertence ou não a sequência.]
(...)
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência
ou pode ser previamente definido no código; */


let sequencia = [0,1];

const fibonacci = numero => {
    for(let i = 0; i < numero; i++) {
        if(i == 0 || i == 1) {
            continue;
        }
        sequencia.push(sequencia[i-1] + sequencia[i - 2]);
    }

    let arr = sequencia.filter(x => x == numero);

    arr == numero ? console.log('pertence') : console.log('não pertence');

}

fibonacci(34); //pertence

fibonacci(20); //não pertence


/* 3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, _(9)__ 

b) 2, 4, 8, 16, 32, 64, _(128)_

c) 0, 1, 4, 9, 16, 25, 36, _(49)__

d) 4, 16, 36, 64, _(100)__

e) 1, 1, 2, 3, 5, 8, _(13)__

f) 2,10, 12, 16, 17, 18, 19, __(20)__*/


/*4) Você está em uma sala com três interruptores, 

(...)

qual interruptor controla cada lâmpada?

- Tenho 50% de chance de acender a luz nos interruptores.
- clicaria 2 interruptores consecutivos para cima e 1 para baixo!
- como não posso ver a lampada da sala que estou, as 2 outras salas que não possuem os interruptores  
estão livres para ver.
- logo se estiver desligada a lampada, o padrão é o inverso e vice versa.
- ao voltar para sala dos interruptores, não configuro o interruptor!
- visito a outra sala (minha ultima ida);
- caso a sala esteja acesa, a sala está dentro do padrão seja pra cima ou pra baixo.
- logo se duas estiverem acesas - a ordem dos interruptores dizem qual sala é.
- se estiver apagada e a primeira sala acesa, não há mais como descobrir.
- ordenar, descobrir o padrão é a melhor maneira.
 */


/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência 

ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; 

*/


const inverterPalavra = (palavra) => {
    let arr = palavra.split('');

    let inverso = new Array();

    arr.map(x => inverso.unshift(x));

    let palavraInvertida = inverso.join('');
    
    return palavraInvertida;
}

console.log(inverterPalavra('programador')); //rodamargorp

