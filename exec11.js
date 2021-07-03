class Arvore {
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

