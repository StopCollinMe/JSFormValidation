const validationForm = (() =>{
    const form = document.querySelector("form");

    const email = document.getElementById("email");
    const emailError = email.nextElementSibling;
    const country = document.getElementById("country");
    const countryError = country.nextElementSibling;
    const zip = document.getElementById("zip");
    const zipError = zip.nextElementSibling;
    const password = document.getElementById("password");
    const passwordError = password.nextElementSibling;
    const passwordConfirmation = document.getElementById("passwordConfirmation");
    const passwordConfirmationError = passwordConfirmation.nextElementSibling;


    const emailRegExp = /^[\w]{1,15}@[\w]{2,7}\.[a-z]{1,3}$/;
    const countryRegExp = /^[a-zA-Z]{1,3}$/;
    const zipRegExp = /^\d{5}$/;

    //Don't know if this is necessary, but we'll figure it out later.
    const passwordRegExp = /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,25}/;
    const passwordConfirmationRegExp = /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,25}/;


    let passwordConfirmed;
    let passwordConfirmationConfirmed;


    email.addEventListener("input", ()=>{
        const isValid = emailRegExp.test(email.value);
        if(isValid){
            email.className = "valid";
            emailError.textContent = "";
            emailError.className = "error";
        }
        else if(email.value.length == 0){
            email.className = "invalid";
            emailError.textContent = "At least one character!";
            emailError.className = "error";
        }
        else if(email.value.length > 25){
            const truncatedValue = email.value.slice(0,25);
            email.value = truncatedValue;
            email.className = "invalid";
            emailError.textContent = "No longer than 25.";
            emailError.className = "error";

        }
        else{
            emailError.textContent = "Not Valid";
            email.className = "invalid";
        }
    });

    country.addEventListener("input", (e)=>{
        const isValid = countryRegExp.test(country.value);
        const inputValue = e.target.value;
        //Add all the other characters we don't want if we want to stop them
        //Ran into some issues adding special characters and such
        const lettersOnly = inputValue.replace(/[0-9]+/g,"");
        e.target.value = lettersOnly;
        if(isValid){
            country.className = "valid";
            countryError.textContent = "";
            countryError.className = "error";
        }
        else if(country.value.length == 0){
            country.className = "invalid";
            countryError.textContent = "Cannot be empty";
            countryError.className = "error";
        }
        else if(country.value.length > 3){
            const maxLength = country.value.slice(0,3);
            country.value = maxLength;
            countryError.textContent = "No larger than 3!";
        }

        else{
            country.className = "invalid";
            countryError.textContent = "Invalid";
        }
    });

    zip.addEventListener("input", (e)=>{
        const isValid = zipRegExp.test(zip.value);
        const inputValue = e.target.value;
        //Add all the other characters we don't want if we want to stop them
        //Ran into some issues adding special characters and such
        const numbersOnly = inputValue.replace(/[a-zA-Z]+/g,"");
        e.target.value = numbersOnly;
        if(isValid){
            zip.className = "valid";
            zipError.textContent = "";
            zipError.className = "error";
        }
        else if(zip.value.length == 0){
            zip.className = "invalid";
            zipError.textContent = "Cannot be empty";
            zipError.className = "error";
        }
        else if(zip.value.length > 5){
            const maxLength = zip.value.slice(0,5);
            zip.value = maxLength;
            zipError.textContent = "No larger than 5!";
        }

        else{
            zip.className = "invalid";
            zipError.textContent = "Invalid";
        }
    });

    password.addEventListener("input", ()=>{
        const isValid = passwordRegExp.test(password.value);
        //Add all the other characters we don't want if we want to stop them
        //Ran into some issues adding special characters and such
        if(isValid){
            password.className = "valid";
            passwordError.textContent = "";
            passwordError.className = "error";
            passwordConfirmed = password.value;
        }
        else if(password.value.length == 0){
            password.className = "invalid";
            passwordError.textContent = "Cannot be empty";
            passwordError.className = "error";
        }
        else if(password.value.length > 25){
            const maxLength = password.value.slice(0,25);
            password.value = maxLength;
            passwordError.textContent = "No larger than 25!";
        }

        else{
            password.className = "invalid";
            passwordError.textContent = "Invalid";
        }
    });

    passwordConfirmation.addEventListener("input", ()=>{
        const isValid = passwordConfirmationRegExp.test(passwordConfirmation.value);
        //Add all the other characters we don't want if we want to stop them
        //Ran into some issues adding special characters and such
        if(isValid){
            passwordConfirmation.className = "valid";
            passwordConfirmationError.textContent = "";
            passwordConfirmationError.className = "error";
            passwordConfirmationConfirmed = passwordConfirmation.value;
        }

        else if(passwordConfirmation.value.length == 0){
            passwordConfirmation.className = "invalid";
            passwordConfirmationError.textContent = "Cannot be empty";
            passwordConfirmationError.className = "error";
        }
        else if(passwordConfirmation.value.length > 25){
            const maxLength = passwordConfirmation.value.slice(0,25);
            passwordConfirmation.value = maxLength;
            passwordConfirmationError.textContent = "No larger than 25!";
        }

        else{
            passwordConfirmation.className = "invalid";
            passwordConfirmationError.textContent = "Invalid";
        }
    });




    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const isValidEmail = emailRegExp.test(email.value);
        if(!isValidEmail){
            email.className = "invalid";
            emailError.textContent = "I expect an email!";
            emailError.className = "error active";
        }
        else{
            email.className = "valid";
            emailError.textContent = "";
            emailError.className = "error";
        }

        const isValidCountry = countryRegExp.test(country.value);
        if(!isValidCountry){
            country.className = "invalid";
            countryError.textContent = "I expect a country!";
            countryError.className = "error active";
        }
        else{
            country.className = "valid";
            countryError.textContent = "";
            countryError.className = "error";
        }

        const isValidZip = zipRegExp.test(zip.value);
        if(!isValidZip){
            zip.className = "invalid";
            zipError.textContent = "I expect a ZIP!";
            zipError.className = "error active";
        }
        else{
            zip.className = "valid";
            zipError.textContent = "";
            zipError.className = "error";
        }

        const isValidPassword = passwordRegExp.test(password.value);
        if(!isValidPassword){
            password.className = "invalid";
            passwordError.textContent = "I expect a password!";
            passwordError.className = "error active";
        }
        else{
            password.className = "valid";
            passwordError.textContent = "";
            passwordError.className = "error";
        }

        const isValidPasswordConfirmation = passwordConfirmationRegExp.test(passwordConfirmation.value);
        if(!isValidPasswordConfirmation){
            passwordConfirmation.className = "invalid";
            passwordConfirmationError.textContent = "I expect a password!";
            passwordConfirmationError.className = "error active";
        }
        else if(passwordConfirmed != passwordConfirmationConfirmed){
            passwordConfirmation.classList = "invalid";
            passwordConfirmationError.textContent = "Must be the same password.";
            passwordConfirmationError.className = "error";
        }
        else{
            passwordConfirmation.className = "valid";
            passwordConfirmationError.textContent = "";
            passwordConfirmationError.className = "error";
        }
        
        if(isValidEmail && isValidZip && isValidCountry && isValidPassword && isValidPasswordConfirmation){
            form.reset();
        }
    });
})();