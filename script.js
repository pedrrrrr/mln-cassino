let moedas = 100;

const simbolos = ["🍒", "🍋", "🍇", "💎", "7️⃣"];

function girar() {

    if (moedas < 10) {
        document.getElementById("resultado").innerText = "💀 Você ficou sem moedas!";
        return;
    }

    moedas -= 10;

    let s1 = simbolos[Math.floor(Math.random() * simbolos.length)];
    let s2 = simbolos[Math.floor(Math.random() * simbolos.length)];
    let s3 = simbolos[Math.floor(Math.random() * simbolos.length)];

    document.getElementById("slot1").innerText = s1;
    document.getElementById("slot2").innerText = s2;
    document.getElementById("slot3").innerText = s3;

    if (s1 === s2 && s2 === s3) {
        moedas += 100;
        document.getElementById("resultado").innerText = "🎉 JACKPOT! +100 moedas!";
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
        moedas += 20;
        document.getElementById("resultado").innerText = "🔥 Dupla! +20 moedas!";
    } else {
        document.getElementById("resultado").innerText = "😢 Perdeu 10 moedas!";
    }

    document.getElementById("coins").innerText = moedas;
}