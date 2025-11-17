/* ---- EFEITO DE FADE AO CARREGAR A PÁGINA ---- */
document.body.style.opacity = 0;
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
});

/* ---- MENU HOVER ---- */
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach(link => {
    link.addEventListener("mouseenter", () => link.style.color = "#c29268");
    link.addEventListener("mouseleave", () => link.style.color = "");
});

/* ---- VOLTAR AO TOPO ---- */
const btnTopo = document.createElement("button");
btnTopo.textContent = "↑";
btnTopo.id = "btnTopo";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "8px";
btnTopo.style.backgroundColor = "#b68d6e";
btnTopo.style.color = "#fff";
btnTopo.style.fontSize = "18px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---- CARROSSEL DA FOTO DO LADO ---- */
const fotos = [
    "css_imagens/foto3.jpeg",
    "css_imagens/foto4.jpeg",
    "css_imagens/foto5.jpeg"
];

let indice = 0;
const img = document.getElementById("fotoTroca");

if (img) {
    img.addEventListener("click", () => {
        indice = (indice + 1) % fotos.length;
        img.style.opacity = 0;

        setTimeout(() => {
            img.src = fotos[indice];
            img.style.opacity = 1;
        }, 200);
    });
}

