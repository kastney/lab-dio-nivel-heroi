do {
    // Captura o nome do herói
    const nome = prompt("Digite o nome do herói:");

    // Captura a quantidade de experiência (XP) e converte para número
    const xp = parseInt(prompt("Digite a quantidade de experiência (XP):"));

    // Variável para armazenar o nível
    let nivel;

    // Classifica o nível do herói
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem no navegador
    alert(`O Herói de nome ${nome} está no nível de ${nivel}`);

    // Pergunta se deseja executar novamente
    var executarNovamente = prompt("Deseja executar novamente? (sim/não)").toLowerCase();
} while (executarNovamente === "sim");