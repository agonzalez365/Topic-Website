$('document').ready(function() {
    const signIn = $('#sign-in-form');

    signIn.on('submit', function(event){
        event.preventDefault();

        const childInputs = $(this).children('input');
        const username = childInputs.eq(0).val();
        const password = childInputs.eq(1).val();
        console.log(username);
        console.log(window.localStorage.getItem(username));
        // user = JSON.parse(user);
        // console.log(user);
        // if(user === null){
        //     alert('Invalid username or password.');
        // } else {
        //     if(!user.password === password){
        //         alert('Invalid username or password. 2');
        //     } else {
        //         user.loggedIn = true;
        //         localStorage.setItem(username, JSON.stringify(user));
        //     }
        // }

    });
});