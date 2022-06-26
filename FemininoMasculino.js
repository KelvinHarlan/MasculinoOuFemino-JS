//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

function MasculinoOuFeminino(sexo){
    if (sexo === 'M'){
        console.log(`você digitou (${sexo}), o seu sexo é Masculino`)
    }
    else if (sexo === 'F'){
        console.log(`você digitou (${sexo}), o seu sexo é Feminino`)
    }
    else{
        console.log('Dado inválido')
    }
}

MasculinoOuFeminino(sexo = 'L')