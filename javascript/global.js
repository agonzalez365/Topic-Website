$('document').ready(function() {

    //incomplete
    // mqCatch = window.matchMedia('(max-width: 940px)');

    // mqCatch.addEventListener(function() {

    // })

    //check login status, update html accordingly
    const signInBtn = document.getElementById('sign-in-btn');
    if(localStorage.getItem('logged-in') === "true"){
        signInBtn.innerHTML = `Sign out <i class="fas fa-user"></i>`;
    }

    //sign user out if logged in, else bring user to log in page
    signInBtn.addEventListener('click', function(event) {
        if(localStorage.getItem('logged-in') === "true") {
            event.preventDefault();
            signInBtn.innerHTML = `Sign in <i class="fas fa-user"></i>`;
            localStorage.setItem('logged-in', false);
        }
    });

    $('#dropdown').on('click', function() {
         $('#nav-links').toggleClass('hidden');
    });

    

});