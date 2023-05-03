function submitDados(event) {
    if(event) {
        event.preventDefault();
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const btn_concluido = document.getElementById('submit');
    const span = document.querySelectorAll('span');

    let msgError = false;
    
    if (nameInput.value.length < 5){ 
        nameInput.placeholder = 'Digite seu nome completo';
        nameInput.style.borderColor = 'red';
        nameInput.style.transition = '.4s ease';
        span.forEach(item => item.style.color = '#e60808b0');
        msgError = true;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.placeholder = 'Email inválido';
        emailInput.style.borderColor = 'red';
        emailInput.style.transition = '.4s ease';
        span.forEach(item => item.style.color = '#e60808b0');
        msgError = true;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phoneInput.value)){
        phoneInput.placeholder = 'Número inválido';
        phoneInput.style.borderColor = 'red';
        phoneInput.style.transition = '.4s ease';
        span.forEach(item => item.style.color = '#e60808b0');
        msgError = true;
    }


    const erro = document.getElementById('msg_error');
    if (msgError) {
        erro.style.visibility = 'visible';
        erro.style.transition = '.3s ease';
        span.forEach(item => item.style.color = '#e60808b0');
    }else {
        const time1 = 2000;
        setTimeout(function() {
            nameInput.style.borderColor = '#313131';
            emailInput.style.borderColor = '#313131';
            phoneInput.style.borderColor = '#313131';
            span.forEach(item => item.style.color = '#00a2ff')

            btn_concluido.value = 'Concluido'
            btn_concluido.style.background = '#5eaa1fcd';
            btn_concluido.style.color = '#fff';
            btn_concluido.style.borderColor = '#fff';
            btn_concluido.style.transition = '.3s ease';

            erro.style.visibility = 'hidden';
        }, time1)

        const time2 = 3500;
        const finish = document.getElementById('finish');
        const form = document.getElementById('form');
        setTimeout(function() {
            form.style.visibility = 'hidden'
            finish.style.visibility = 'visible';
            msg_finish.innerHTML = `Muito bem ${nameInput.value}, seu cadastro foi concluido.`;
            
        }, time2)
    }
    console.log(`${nameInput.value}, ${emailInput.value}, ${phoneInput.value}`);
}
submitDados()