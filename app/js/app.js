function openNav() {
    document.getElementById("login_open").style.display = "none";
    document.getElementById("login_close").style.display = "flex";
    document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
    document.getElementById("login_open").style.display = "flex";
    document.getElementById("login_close").style.display = "none";
    document.getElementById("myNav").style.width = "0%";
}
