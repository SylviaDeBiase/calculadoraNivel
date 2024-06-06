document.getElementById('form-adicionarHeroi').addEventListener('submit', adicionarValores);


function adicionarValores(event) {
    event.preventDefault();
    
    let vitorias = document.getElementById('vitorias').value;
    let derrotas = document.getElementById('derrotas').value;
    
    let saldoVitorias = defineVitorias(vitorias, derrotas);
    let ranking = defineRanking(vitorias, derrotas);
    console.log(ranking);
    document.getElementById('ranking').innerText = "O Herói tem saldo de " + saldoVitorias + " e está no nível de " + ranking;
    
}
function defineRanking(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    let nivel;
    if(saldo<10){
        nivel = "Ferro";
    } else if(saldo<20){
        nivel = "Bronze";
    } else if(saldo<50){
        nivel = "Prata";
    } else if(saldo<80){
        nivel = "Ouro";
    } else if(saldo<90){
        nivel = "Diamante";
    } else if(saldo<100){
        nivel = "Lendário";
    } else{
        nivel = "Imortal";
    }
    return nivel;
}

function defineVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    if(saldo<0){
        return (-1*saldo) +" derrotas ";
    }
    return saldo +" vitórias ";
}