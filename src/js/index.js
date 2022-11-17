function pessoalDaCoderHouse (nome, sobrenome, idade, fruta, jogo){
     this.nome = nome
     this.sobrenome = sobrenome
     this.idade = idade
     this['fruta preferida'] = fruta
     this.jogoPreferido = jogo

     this.seApresentar = () => {
         document.write('Olá, meu nome é ' + this.nome + ' ' + this.sobrenome + ', tenho ' + idade + ' anos, e a minha comida preferida é ' + this['fruta preferida'] + ', e gosto muito de jogar ' + jogo + `. <br><br>`)
     }
 }

 const alefh = new pessoalDaCoderHouse('Alefh', 'Colaço', 19, 'Maracujá', 'Valorant')
 const bruno = new pessoalDaCoderHouse('Bruno', 'Moreira', 30, 'Banana', 'Jogo do bicho')
 const andre = new pessoalDaCoderHouse('André', 'Luís', 30, 'Abacate', 'Xadrez')
 const nathalia = new pessoalDaCoderHouse('Nathalia', 'Corrêa', 30, 'Abacaxi', 'Flexbox froggy')
 alefh.seApresentar()
 bruno.seApresentar()
 andre.seApresentar()
 nathalia.seApresentar()
