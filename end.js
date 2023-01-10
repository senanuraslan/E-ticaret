const username = document.getElementById("username");
username.addEventListener("keyup",() => {
    saveScoreBtn.disable = !username.ariaValueMax; //username girmezse buton pasif olacak
});