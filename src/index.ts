import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output});

let opcao_escolhida, invalido, level_vitorias_heroi, saldo_partidas_ranqueadas, saldoVitorias, saldoDerrotas;

do{
    console.log("==== Calculadora de partidas ranqueadas ==== \n");
    opcao_escolhida = parseInt(await rl.question('Escolha uma opção:\n 1 - Realizar classificação do herói pelas suas vitórias \n 2 - Encerrar aplicação\n '));
    invalido = 0;

    switch(opcao_escolhida){
        case 1 :
            saldoDerrotas = parseInt(await rl.question('Informe a quantidade total de derrotas do herói:\n'));
            saldoVitorias = parseInt(await rl.question('Informe a quantidade total de vitórias do herói:\n'));

            saldo_partidas_ranqueadas = saldo_ranqueadas(saldoVitorias, saldoDerrotas);
            if(saldo_partidas_ranqueadas < 0){
                saldo_partidas_ranqueadas = 0;
            }
            console.log(`O saldo de Rankeadas é de ${saldo_partidas_ranqueadas}`);

            level_vitorias_heroi = classificarHeroiVitorias(saldoVitorias);
            console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${level_vitorias_heroi}`);
            
            break;
        case 2 :
            //process.exit(0);
            finalizarAplicacao();
        default:
            console.log('Opção inválida!');
            invalido = 1;
            break;
    }

}while(!invalido)

rl.close();

function saldo_ranqueadas(vitorias: number, derrotas: number){
    return vitorias - derrotas;
}

function finalizarAplicacao(){
    process.exit(0);
}

function classificarHeroiVitorias(vitorias: number){

    let level_vitorias: string;

    if (vitorias <= 10){
        level_vitorias = 'Ferro';
    }else if( vitorias >=11 && vitorias <= 20){
        level_vitorias = 'Bronze';
    }else if( vitorias >=21 && vitorias <= 50){
        level_vitorias = 'Bronze';
    }else if( vitorias >=51 && vitorias <= 80){
        level_vitorias = 'Bronze';
    }else if( vitorias >=81 && vitorias <= 90){
        level_vitorias = 'Bronze';
    }else if( vitorias >=91 && vitorias <= 100){
        level_vitorias = 'Bronze';
    }else{
        level_vitorias = 'Imortal';
    }

    return level_vitorias;
}