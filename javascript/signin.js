//this is for mock account functionality so the page can adapt to user
//not for real accounts
$('document').ready(function () {
    const signIn = $('#sign-in-form');

    signIn.on('submit', function (event) {
        event.preventDefault();

        const childInputs = $(this).children('input');
        const username = childInputs.eq(0).val();
        const password = childInputs.eq(1).val();
        let user = JSON.parse(window.localStorage.getItem('user'));
        if (user === null) {
            alert('Invalid username or password.');
        } else {
            if (user.password !== password) {
                alert('Invalid username or password.');
            } else if (user.username !== username) {
                alert('Invalid username or password.');
            } else {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('logged-in', true);
                //update below once merged
                window.location.href = 'index.html';
            }
        }

    });

    $('#create-account').on('click', function() {
        $('main').empty();
        $('main').append(signupHTML);
    });

    $('#account-recovery').on('click', function() {
        $('main').empty();
        $('main').append(recoverHTML);
    });

});

//sign in pages

const signinHTML = `
<h1>Sign-In</h1>
<form action="" id="sign-in-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required placeholder="username">

    <label for="pass">Password:</label>
    <input type="password" id="pass" name="password" minlength="8" required placeholder="password">

    <input type="submit" value="Sign in" id="signin-Btn">

    <div>
        <a href="#" id="create-account">Create a new account</a>
    </div>

    <div>
        <a href="#" id="account-recovery">Forgot your password?</a>
    </div>
</form>   
`

const sentHTML = `
<div>
        <h1>Your Recovery Email Has Been Sent!</h1>
        <h6>Check your email for password recovery options.</h6>
    </div>
    <h6><a href="signin.html">Log-in</a></h6>
    <h6><a href="index.html">Home</a></h6>
`

const recoverHTML = `
<div>
        <h1>Enter Recovery Email</h1>
        <form action="">
            <label for="email">Recovery Email:</label>
            <input type="email" id="email" name="email" required placeholder="email">
            
            <input type="submit" value="Submit">

            <div>
                <a href="signin.html">Back to sign-in</a>
            </div>
        </form>
    </div>
`

const signupHTML = `
<div>
<h1>Sign Up</h1>
<form action="" id="create-account">
    <label for="email">Email Account:</label>
    <input type="email" id="email" name="email" required placeholder="email">

    <label for="username">Username:</label>
    <input type="text" id="username" name="username" maxlength="12" required placeholder="username">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8" required placeholder="password">

    <label for="c-password">Confirm Password:</label>
    <input type="password" id="c-password" name="c-password" minlength="8" required placeholder="confirm password">
    
    <input type="submit" value="Create">

    <div>
        <a href="signin.html">Already have an account?</a>
    </div>
</form>
</div>
`

