function entrou() {
    var a = window.document.getElementById('cabin');
    a.style.background = '#d4b2f3'
    a.style.height = '150px'
    a.style.width = '150px'
    a.innerText = 'Entrou!'
    a.style.transition = '0.25s ease'
}

function saiu() {
    var a = window.document.getElementById('cabin');
    a.style.background = '#fff'
    a.innerText = ''
    a.style.height = '100px'
    a.style.width = '100px'
    a.style.transition = '0.25s ease'
}
