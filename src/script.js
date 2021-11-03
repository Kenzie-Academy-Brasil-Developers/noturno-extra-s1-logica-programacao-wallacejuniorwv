function calculateSalary(salario, vendas) {
    let salarioTotal = 0;
    let comissao = 0;
   
 
    if (vendas <= 1200) {
        comissao = (vendas * 3) / 100;
        salarioTotal = salario + comissao;
        return "Salario do vendedor: " + salarioTotal;
    } else {
        comissao = (vendas * 5) / 100;
        salarioTotal = salario + comissao;
        return "Salario do vendedor: " + salarioTotal
    }
}
console.log(calculateSalary(2100, 1150));

//======================================

function calculateStock(qntAtual, qntMax, qntMin){
    let mensagem = "Nao Efetuar compra!";
        quantidadeMedia = (qntMax + qntMin) / 2;
        if (qntAtual >= quantidadeMedia){
            return mensagem;
        } else {
            mensagem = "Efetuar compra!"
            return mensagem;
        }
    
    }
    console.log(calculateStock(3000, 5000, 2000));

    //======================================

    function calculateAge(anoNasci, anoAtual){
        idadeEmAnos = anoAtual - anoNasci;
        console.log("Sua idade e " + idadeEmAnos + " Anos");
        idadeEmMeses = idadeEmAnos * 12;
        console.log("Sua idade em meses e: " + idadeEmMeses);
        idadeEmDias = idadeEmMeses * 365;
        console.log("Sua idade em Dias e: " + idadeEmDias)
        idadeSemanas = idadeEmAnos * 52;
        console.log("Sua idade em Semanas e: " + idadeSemanas)

    } 
    console.log(calculateAge(1990,2021));

    //=============================================

    function getDiagonal(){
        console.log();
    } 

    function cashMachine(valorSaque){
       let contador = 0;
       let saque = 0;
        let notas = [100, 100, 100, 50, 20, 10, 2, 1];

            for(contador = 1; contador = valorSaque; contador ++){
                saque = saque + contador;
                return "Saque realizado no valor de " + saque;
                
            }
    } console.log(cashMachine(383));
