$('document').ready(function() {
    const signIn = $('#sign-in-form');

    signIn.on('submit', function(event){
        event.preventDefault();

        const childInputs = $(this).children('input');
        const username = childInputs.eq(0).val()
        const password = childInputs.eq(1).val();
        let user = JSON.parse(window.localStorage.getItem('user'));
        if(user === null){
            alert('Invalid username or password.');
        } else {
            if(user.password !== password){
                alert('Invalid username or password.');
            } else if (user.username !== username){
                alert('Invalid username or password.');
            } else {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('logged-in', true);
                window.location.href = 'index.html';
            }
        }

    });
});