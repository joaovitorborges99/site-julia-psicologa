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

