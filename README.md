1. é uma versão de especificação do javascript, a melhor adotada e mais utilizada por desenvolvedores javascript por ter diversas features significantes que na ES5, lançada em 2009 não possuía.

2. A partir do ES6 foi possivel declarar classes de maneira nativa no javascript, permitindo heranças e métodos,
Class Javascript extends Language {
	constructor() {
	}
	
	metodo() {
		}
}

a existência de constantes (const), que permite a integrabilidade desse valor não sendo possível sofrer mutação conforme a execução, variáveis de escopo (let), existente para ser utilizada é acessada apenas no escopo de onde é definida,

const TOKEN = 1231233123

var variavel = 10

function printa() {
	for(let i; i < variavel; i++){
console.log(i)
	}
}

 arrow function, que permite a criação de uma função de maneira com que possa ser utilizada sem perder o escopo this quando era necessário utilizá-la no escopo geral de classe além de permitir simplificações no código

	Class Javascript extends Language {
	constructor() {
	}
	
	metodo() {
const numeros= [1, 2, 3];
const adiciona1 = numeros.map(n => n + 1)
		}
}

3. Var é uma variável padrão, let é uma variável que só existe no escopo onde foi definida, const é uma constante, uma variável constante, imutável durante toda a execução

4. destructuring é o ato realizado pelo javascript de pegar uma variável, em que o conteúdo seja um objeto, entrar na estrutura dela, e obter os atributos disponíveis dentro dela, desestruturando a variável selecionada, é utilizado para quando quer iniciar novas variáveis onde as informações do nome atributos juntamente de seus respectivos valores, sejam extraídas e possibilitando ser utilizadas como variáveis, diretamente

5. é uma interface que permite a interação do javascript, e não só do javascript, com o html, permitindo assim, no contexto do javascript, realizar alterações no documento html, de estilização, realizar eventos

6. As funções assíncronas buscam solucionar os problemas que foram encontrados ao realizar requisições utilizando o ajax, permitindo trabalhar mais facilmente com promises e também informar quais instruções devem ser aguardadas a sua resolução para continuar a execução e quais devem manter a assincronicidade informada pela palavra async em seu escopo

7. O comando await, serve para informar que a instrução seguinte deve aguardar ser resolvida para que a execução do programa possa dar continuidade, o comando async serve para deixar claro à função que em seu escopo será possível utilizar o await 

8. A promise trata melhor os erros, utilizando o resolve e o reject e com isso, que claro, também é considerada uma vantagem de maneira individual, também permite uma melhor codificação em casos de encadeamento, fornecendo também o uso do Promise.all

9. const upperCasePromise = (valor) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(typeof valor === 'string') {
          resolve(valor.toUpperCase())
        } else (
          reject('the request value is not supported')
        )
      }, Math.random() * (2000 - 500) + 500)
    });
}

10. var lampada = false

function verificarLampada() {
  //"troque o estado da lâmpada"
  lampada = !lampada
  //retorna estado atual da lampada 
  return lampada
}

setInterval(() => {const estadoAtual= verificarLampada(); console.log(estadoAtual)} ,Math.random() * (4000 - 2000) + 2000);

11. class Arvore {
  name = "arvore"
  constructor(raiz, direita, esquerda) {
    this.raiz = raiz
    this.direita = direita
    this.esquerda = esquerda
  }
  
  criarNo(valor1, valor2) {
    
    if(valor1 !== this.raiz && valor2 !== this.raiz){

      if(this.esquerda !== undefined && this.direita !== undefined){
        if(valor1 < valor2) {
          this.esquerda.criarNo(valor1, valor2)
        } else {
          this.direita.criarNo(valor1, valor2)
        }

      }else {
        if(valor1.valor < valor2.value) {
          this.esquerda = new Folha(valor1, undefined, undefined)
          this.direita = new Folha(valor2, undefined, undefined)
        } 
        else {
          this.esquerda = new Folha(valor2, undefined, undefined)
          this.direita = new Folha(valor1, undefined, undefined)
        }
      }
    }

  }
  
}

class No extends Arvore {
  name = "no"
	constructor(raiz, direita, esquerda) {
    super(raiz, direita, esquerda)
  }
}

class Folha extends No{
  name = "folha"
	constructor(raiz, direita, esquerda) {
    super(raiz, direita, esquerda)
  }

  toNo(folha) {
    
  }
}

arvore = new Arvore()

arvore.raiz = 20
arvore.criarNo(10, 30)
arvore.criarNo(50, 70)
// arvore.criarNo(10, 90)

console.log(arvore)

