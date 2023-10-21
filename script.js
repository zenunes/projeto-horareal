function carregar() {
    var msg = window.document.querySelector(".msg");
    var image = window.document.querySelector(".image");
    var data = new Date();
    var minuts = new Date();
    var hora = data.getHours();
    var min = minuts.getMinutes();
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;
    if (hora >= 0 && hora < 12) {
        image.src = 'assents/manha.png';
        document.body.style.background = '#5A6E86';
    } else if (hora >= 12 && hora < 18) {
        image.src = 'assents/tarde.png'
        document.body.style.background = '#EA4900';
    } else {
        image.src = 'assents/noite.png';
        document.body.style.background = '#02336D';
        document.body.style.color = '#fff';
        document.querySelector('.msg').style.color = '#071831'
    }
}
