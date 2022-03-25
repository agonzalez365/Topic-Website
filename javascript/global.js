$('document').ready(function() {
    //check login status, update html accordingly
    const signInBtn = document.getElementById('sign-in-btn');

    //JS Media Queries
    medQuery = window.matchMedia('(max-width: 1000px)');

    //sign user out if logged in, else bring user to log in page
    signInBtn.addEventListener('click', function(event) {
        if(localStorage.getItem('logged-in') === "true") {
            event.preventDefault();
            if(!medQuery.matches){
                signInBtn.innerHTML = `Sign in <i class="fas fa-user"></i>`;
            }
            localStorage.setItem('logged-in', false);
            $('.post-creation-container').empty();
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
    // settings / signin dropdown
    /*function toggleClass(elem, className){
        if (elem.className.indexOf(className) !== -1){
          elem.className = elem.className.replace(className,'');
        }
        else{
          elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
        }
      
        return elem;
      }
      
      function toggleDisplay(elem){
        const curDisplayStyle = elem.style.display;			
      
        if (curDisplayStyle === 'none' || curDisplayStyle === ''){
          elem.style.display = 'block';
        }
        else{
          elem.style.display = 'none';
        }
      
      }
      
      function toggleMenuDisplay(e){
        // const dropdown = e.currentTarget.parentNode;
        const menu = $('.menu');
        const icon = $('.fa-angle-right');
      
        toggleClass(menu, 'hide');
        toggleClass(icon, 'rotate-90');
      }
      
      function handleOptionSelected(e){
        toggleClass(e.target.parentNode, 'hide');			
      
        const id = e.target.id;
        const newValue = e.target.textContent + ' ';
        const titleElem = $('.title');
        console.log(titleElem);
        const icon = document.querySelector('.dropdown .title .fa');
      
      
        titleElem.textContent = newValue;
        titleElem.appendChild(icon);
      
        //trigger custom event
        document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
          //setTimeout is used so transition is properly shown
        setTimeout(() => toggleClass(icon,'rotate-90',0));
      }
      
      function handleTitleChange(e){
        const result = document.getElementById('result');
      
        result.innerHTML = 'The result is: ' + e.target.textContent;
      }
      
      //get elements
      const dropdownTitle = document.querySelector('.dropdown .title');
      const dropdownOptions = document.querySelectorAll('.dropdown .option');
      console.log(dropdownOptions);
      
      //bind listeners to these elements
      dropdownTitle.addEventListener('click', toggleMenuDisplay);
      
      dropdownOptions.forEach(option => option.addEventListener('click', handleOptionSelected));
      
      document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);
      

      // dropdown html

      <div class='dropdown' >
                <div class='title pointerCursor'>☰<i class="fa"> Menu </i></div>
                
                <div class='menu pointerCursor hide'>
                    <div class='option' id='sign-in'>
                        
                    </div>
                    <div class='option' id='settings'>
                        <a id="settings" href="#">Settings</a>
                    </div>
                </div>
            </div>*/