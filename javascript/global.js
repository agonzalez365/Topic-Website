$('document').ready(function() {
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

    //JS Media Queries
    medQuery = window.matchMedia('(max-width: 1000px)');

    //updates html on page load
    if(medQuery.matches){
        $('#profile').children().eq(0).html('<i class="fas fa-user">');;
    }
    else {
        $('#profile').children().eq(0).html('Sign-in <i class="fas fa-user">');
    }

    //updates on screensize change
    medQuery.addListener(function(query) {
        if(query.matches){
            $('#profile').children().eq(0).html('<i class="fas fa-user">');;
        }
        else {
            $('#profile').children().eq(0).html('Sign in <i class="fas fa-user">');
        }
        
    });

    

});