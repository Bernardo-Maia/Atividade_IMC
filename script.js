 const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(1);
        const idealMin = (18.5 * (altura**2)).toFixed(1);
        const idealMax = (24.9 * (altura**2)).toFixed(1);
        
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III.';
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}cm, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}. Procure manter o seu peso entre ${idealMin}kg e ${idealMax} kg`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc); 