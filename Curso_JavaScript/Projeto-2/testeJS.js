function submitDados(event) {
    if(event) {
        event.preventDefault();
    }

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone= document.getElementById('phone');
    const btn_concluido = document.getElementById('submit');
    const span = document.querySelectorAll('span');

    let msgError = false;
    
    if (name.value.length < 5){ 
        name.placeholder = 'Digite seu nome completo';
        name.style.borderColor = 'red';
        name.style.transition = '.4s ease';
        span.forEach(item => item.style.color = '#e60808b0');
        msgError = true;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        email.placeholder = 'Email inválido';
        email.style.borderColor = 'red';
        email.style.transition = '.4s ease';
        span.forEach(item => item.style.color = '#e60808b0');
        msgError = true;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone.value)){
        phone.placeholder = 'Número inválido';
        phone.style.borderColor = 'red';
        phone.style.transition = '.4s ease';
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
            name.style.borderColor = '#313131';
            email.style.borderColor = '#313131';
            phone.style.borderColor = '#313131';
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
            form.style.display = 'none';
            finish.style.display = 'flex';;
            msg_finish.innerHTML = `Muito bem ${name.value}, seu cadastro foi concluido.`;
        }, time2)
    }
    console.log(`${name.value}, ${email.value}, ${phone.value}`);
}
submitDados()
