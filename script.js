function verProjeto(){
    alert("Abrir pagina do projeto");
}

console.log("Portfólio carregado")

window.onload = function(){
    let cards = document.querySelectorAll("card")
    cards.forEach(( card,i)=>{

        card.sytyle.opacity = 0

        setTimeout(()=>{
            card.style.transition="0.5s"
            card.style.opacity = 1
        }, 1*200)
    })
}
