$('document').ready(function() {
    const createAccount = $('#create-account');
    console.log(createAccount);
    
    createAccount.on('submit', function(event) {
        event.preventDefault();
        //get inputs
        const childInputs = createAccount.children('input');
        const email = childInputs.eq(0).val();
        const username = childInputs.eq(1).val();
        const password = childInputs.eq(2).val();
        const confirmPass = childInputs.eq(3).val();

        console.log(childInputs);
        console.log(username, email, password, confirmPass);

        //to-do: check for empty inputs, do not submit
        if(!password === confirmPass){
            alert('Passwords do not match');
        } else {
            const user = {
                email,
                password,
            }

            window.localStorage.setItem(username, JSON.stringify(user));
            //redirect to signin
            window.location.href = 'signin.html';
        }
    });
});