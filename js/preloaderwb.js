document.body.style.overflow = "hidden";
const pMain = document.getElementById("page-main")
pMain.style.display = "none"
 function newinit () {
    setTimeout(() => {
        document.querySelector('.preloaderwb').style.display = 'none';
        pMain.style.display = "block"
        document.body.style.overflow = "auto";
    }, 2000)
}

newinit();