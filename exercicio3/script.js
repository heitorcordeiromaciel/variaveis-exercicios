let nome = prompt('informe o seu nome');
let birthDay = prompt('informe o dia de nascimento');
let birthMonth = prompt('informe o mês de nascimento').toLowerCase();
let birthYear = prompt('informe o ano de nascimento');

switch (birthMonth) {
    case 'janeiro':
        birthMonth = 01;
        break;
    case 'fevereiro':
        birthMonth = 02;
        break;
    case 'março':
        birthMonth = 03;
        break;
    case 'abril':
        birthMonth = 04;
        break;
    case 'maio':
        birthMonth = 05;
        break;
    case 'junho':
        birthMonth = 06;
        break;
    case 'julho':
        birthMonth = 07;
        break;
    case 'agosto':
        birthMonth = 08;
        break;
    case 'setembro':
        birthMonth = 09;
        break;
    case 'outubro':
        birthMonth = 10;
        break;
    case 'novembro':
        birthMonth = 11;
        break;
    case 'dezembro':
        birthMonth = 12;
        break;
};

const birthDate = Number(`${birthDay}${birthMonth}${birthYear}`);

let address = prompt('informe seu endereço');
let cpf = Number((prompt('informe seu cpf').split(/[\.\-]/).join('')));
let schooling = prompt('grau de escolaridade');
let cnh = prompt('possui cnh?');
let children = prompt('quantos filhos');
let position = prompt('qual seu cargo atual?');
let pay = Number(prompt('salario'));
let comission = prompt('Recebe comissão? Se sim, informe a porcentagem').toLowerCase();
if (comission === 'não') {
    comission = 0;
};
let admissionYear = Number(prompt('informe o ano de admissão'));

if (cnh === 'sim') {
    cnh = true;
} else if (cnh === 'não') {
    cnh = false;
} else {
    cng = null;
};

const relatorio = { nome, birthDate, address, cpf, schooling, cnh, children, position, pay, comission, admissionYear };

console.log(relatorio);