function calcularMedia() {
    const nota1= parseFloat(document.getElementById('nota1').value);
    const nota2= parseFloat(document.getElementById('nota2').value);
    
    const media= (nota1+nota2)/2;

    const resultado= document.getElementById('resultado');
    resultado.innerHTML= "Média: " + media.toFixed(2);
}