const cellElements = document.querySelectorAll('[data-cell]')
let isCircleTurn;

for (const cell of cellElements){
    cell.addEventListener('click', handleClick,{once: true})
}

const handleClick = (e) =>{
    // Colocar a marca (X ou Circulo)
    const classToAdd = isCircleTurn ? 'circle'
    // Verificar por vitória
    // Verificar por empate
    // Mudar o símbolo
}