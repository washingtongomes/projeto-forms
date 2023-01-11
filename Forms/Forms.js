console.log("teste ok")
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextArea = document.querySelector("#message")
const barraProgresso = document.querySelector(".barra div")

form.addEventListener("submit", (e)=> {
    e.preventDefault(); // preventDefault para não submeter form vazio ou invalido
    //valida se nome está vazio
    if(nameInput.value === ""){
        alert("Preencha o nome, por favor!")
        return;
    }

    //validando email 
    if(emailInput.value === "" || !IsValidEmail(emailInput.value)  ){
        alert("Preencha o email corretamente!")
        return;
    }

    //verifica se senha foi preenchida
    if(!validaPassword(passwordInput.value, 6)){
        alert("Senha precisa ter no minino 8 digitos!");
        return;

    }
    //validando option do select
    if(jobSelect.value === ""){
        alert("Selecione uma opção!")
        return;
    }
    //verifica se mensagem está preenchida
    if(messageTextArea.value === ""){
        alert("Preencha o campo ou escreva algo aqui... !")
        return;
    }

    //se todos campos forem cvalidados envia o form
    form.submit();
})

//função para validar email com regex
function IsValidEmail(email){
    const emailRegex = new RegExp(
            // usuario123@dominio.com.br 
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
        return emailRegex.test(email) ? true : false
}

//função valida senha
function validaPassword(password, minDigits ){
    if(password.length >= minDigits ){
      return true //senha valida
    } return false;
}


const uploadBarra = () =>{
    const progressBar = document.querySelector(".progressBar")
    progressBar.setAttribute(".progressBar" )
}
