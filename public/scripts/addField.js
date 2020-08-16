// Procura o butao
document.querySelector("#add-time")

// Quando clicar
.addEventListener('click', cloneField)

function cloneField() {
    // Duplicar os campos (quais?)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    // Limpar os campos novos
    const fields = newFieldContainer.querySelectorAll('input') // fields retorna lista
    
    fields.forEach(function(butao) {
        // Pegar o field do momento e limpar
        butao.value = "";
    })
    // Colocar na página (onde?)
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}