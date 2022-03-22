$('document').ready(function() {
    //check login status, update html accordingly
    const signInBtn = document.getElementById('sign-in-btn');

    //JS Media Queries
    medQuery = window.matchMedia('(max-width: 1000px)');

    //sign user out if logged in, else bring user to log in page
    signInBtn.addEventListener('click', function(event) {
        if(localStorage.getItem('logged-in') === "true") {
            event.preventDefault();
            if(!query.matches){
                signInBtn.innerHTML = `Sign in <i class="fas fa-user"></i>`;
            }
            localStorage.setItem('logged-in', false);
        }
    });

    $('#dropdown').on('click', function() {
         $('#nav-links').toggleClass('hidden');
    });

    

    //updates html on page load
    if(medQuery.matches){
        $('#profile').children().eq(0).html('<i class="fas fa-user">');;
        $('#nav-links').addClass('hidden');
    } else {
        if(localStorage.getItem('logged-in') === "true") {
            $('#profile').children().eq(0).html('Sign out <i class="fas fa-user">')
        } else {
            $('#profile').children().eq(0).html('Sign in <i class="fas fa-user">');
        }
    }

    //updates on screensize change
    medQuery.addListener(function(query) {
        if(query.matches){
            $('#profile').children().eq(0).html('<i class="fas fa-user">');
            $('#nav-links').addClass('hidden');
        }
        else {
            $('#nav-links').removeClass('hidden');
            if(localStorage.getItem('logged-in') === "true") {
                $('#profile').children().eq(0).html('Sign out <i class="fas fa-user">');
            } else {
                $('#profile').children().eq(0).html('Sign in <i class="fas fa-user">');
            }
            
        }
        
    });

    

});