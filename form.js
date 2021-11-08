const form = document.getElementById(".connect__form")
const userName = document.getElementById("Name")
const email = document.getElementById("Email")
const message = document.getElementById("Message")
const error = document.querySelector(".form__error")



form.addEventListener("submit", (e) => {
    e.preventDefault()

})
    
    function checkInputs()  {
        const nameValue = userName.value.trim
        const emailValue = email.value.trim
        const messageValue = message.value.trim
       
        if (nameValue === "") {
           setErrorFor()
            
        }
        if (emailValue === "") {
            setErrorFor()
            
        }
        if (messageValue === "") {
            setErrorFor()
            
        }
    }

    function setErrorFor() {
        const formInput = input.parentElement;
        formInput.className = "form__error show";
    }

