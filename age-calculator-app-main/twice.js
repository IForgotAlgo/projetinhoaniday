function apertar_botao() {
    let dias = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;

    let data = new Date();

    data = data.getFullYear();
    
    /* Convertendo para Inteiro e subtraindo o valor do ano informado pelo usuário*/
    let idade = parseInt(data) - ano;

    console.log(idade);       


}