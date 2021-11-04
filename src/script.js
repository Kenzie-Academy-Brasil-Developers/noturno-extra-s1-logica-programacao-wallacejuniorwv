function calculateSalary(salario, vendas) {
    let salarioTotal = 0;
    let comissao = 0;
    let valor1 = 1200
    let valor2 = vendas - valor1;

    if (vendas > 0 && vendas <= valor1) {
        comissao = (vendas * 3) / 100;
        salarioTotal = salario + comissao;
        return "Salario do vendedor: " + salarioTotal;
    } else {
        comissao = valor1 * 3 / 100 + valor2 * 5 / 100
        salarioTotal = salario + comissao;
        return "Salario do vendedor: " + salarioTotal
    }
}
console.log(calculateSalary(2100, 1800));

//======================================

function calculateStock(qntAtual, qntMax, qntMin) {

    quantidadeMedia = (qntMax + qntMin) / 2;
    if (qntAtual >= quantidadeMedia) {
        return "Não Efetuar Compra";
    } else {
        return "Efetuar compra!"
    }
}
console.log(calculateStock(9000, 15000, 10000));

    //======================================

function calculateAge(anoNasci, anoAtual) {
    idadeEmAnos = anoAtual - anoNasci;
    console.log("Sua idade eh " + idadeEmAnos + " Anos");
    idadeEmMeses = idadeEmAnos * 12;
    console.log("Sua idade em meses e: " + idadeEmMeses);
    idadeEmDias = idadeEmMeses * 365;
    console.log("Sua idade em Dias e: " + idadeEmDias)
    idadeSemanas = idadeEmAnos * 52;
    console.log("Sua idade em Semanas e: " + idadeSemanas)

}
console.log(calculateAge(1990, 2021));

    //=============================================


function cashMachine(valorSaque) {
    let contador = 0;
    let saque = 0;
    let notas = [100, 50, 20, 10, 2, 1];
    let contadorNotas = 0;

    for (contador = 0; contador < notas.length; contador++) {
        let valor = valorSaque / notas[contador];
        valorSaque = valorSaque % notas[contador];
        contadorNotas = parseInt(valor);

        if (contadorNotas > 0) {
            console.log(contadorNotas + " nota de R$ " + notas[contador])
        }
    }
}
console.log(cashMachine(383));
