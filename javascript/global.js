$('document').ready(function() {

    //check login status, update html accordingly
    const signInBtn = document.getElementById('sign-in-btn');
    if(localStorage.getItem('logged-in') === "true"){
        signInBtn.innerHTML = `Sign out <i class="fas fa-user"></i>`;
        signInBtn.addEventListener('click', function(event) {
            event.preventDefault();
            signInBtn.innerHTML = `Sign in <i class="fas fa-user"></i>`;
            localStorage.setItem('logged-in', false);
        });
    }


});