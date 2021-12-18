var player = "x";
var tabuleiro = [];
mostraVez();

const jogada = (bt)=>{
    if (typeof tabuleiro[bt.id] !== "undefined"){
        alert('Jogou!');
        return;
    }

    tabuleiro[bt.id] = player;
    bt.innerHTML = `<img src="assets/img/${player}.png">`;
    mostraVez();

    for (let i = 0; i<3; i++){
        
    }

    if(player == "x")
        player = "o";
    else{
        player = "x"
    }

    mostraVez();

}

function mostraVez(){
    document.getElementById("mensagem").innerHTML = `É a vez do jogador <img src="assets/img/${player}.png">`;
}

const reset = ()=>{
    window.location.reload();
}