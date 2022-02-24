$(document).ready(function() {
    const hex = ['1B4965', 'C9D2D1', '23303D'];

    let inputs = $('#profile').children('button');

    for (let i = 0; i < inputs.length; i += 1) {
        inputs.eq(i).on('click', function() {
            $('body').css('--nav-main-color', `#${hex[i]}`);
        });
        console.log('yo')
    } 
});

/*          
            <button id="navy" class="btn">Navy</button>
            <button id="light" class="btn">Light</button>
            <button id="dark" class="btn">Dark</button>
*/