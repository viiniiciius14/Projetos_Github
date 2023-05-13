function submitDados() {
    const emailInput = window.document.getElementById('email');
    const nameInput = window.document.getElementById('name');
    const numInput = window.document.getElementById('celular');
    const btn_concluido = window.document.getElementById('submit');
    
    const dateName = nameInput.value;
    const dateEmail = emailInput.value;
    const dateNum = Number(numInput.value);
    
    console.log(`${dateName}, ${dateEmail}, ${dateNum}`);

    const time = 2000;
    setTimeout(function() {
        btn_concluido.value = "Concluido";
        btn_concluido.style.backgroundColor = '#5eaa1fcd';
        btn_concluido.style.border = 'solid 1px #fff';
        btn_concluido.style.color = '#fff';
        btn_concluido.style.transition = '0.3s ease'
    }, time);
        
    }
submitDados()
