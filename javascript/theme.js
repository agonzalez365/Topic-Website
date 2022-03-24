$(document).ready(function() {
    const hex = [
        {
            /* Navy */
            /* header & footer colors */

            navMain: '1B4965',
            navHover: '18415A',
            navHighlight: 'FFF1A6',
            navLogo: 'CAE9FF',
            navText: 'CAE9FF',
            navShadow: '44444499',

            /* page content colors */
    
            bodyText: 'FFFFFF',
            bodyBackground: '545454',
            bodyContent1: '758090',
            bodyContent2: '636D7C',
            bodyShadow: '31313199',
            bodyButton: '5FA8D3',
            bodyButtonHover: '3f8db9'

        }, 
        {
            /* Light */
            /* header & footer colors */

            navMain: 'd4d4d4',
            navHover: '23303D',
            navHighlight: 'FFF1A6',
            navLogo: 'CAE9FF',
            navText: '23303D',
            navShadow: '44444499',

            /* page content colors */
    
            bodyText: '23303D',
            bodyBackground: '9c9c9c',
            bodyContent1: 'a8b2bf',
            bodyContent2: '8f9fb8',
            bodyShadow: '31313199',
            bodyButton: '5FA8D3',
            bodyButtonHover: '3f8db9'
            
        }, 
        {
            /* Dark */
            /* header & footer colors */

            navMain: '23303D',
            navHover: 'd4d4d4',
            navHighlight: 'FFF1A6',
            navLogo: 'CAE9FF',
            navText: 'CAE9FF',
            navShadow: '44444499',

            /* page content colors */
    
            bodyText: 'FFFFFF',
            bodyBackground: '37414a',
            bodyContent1: '313538',
            bodyContent2: '48494a',
            bodyShadow: '31313199',
            bodyButton: '5FA8D3',
            bodyButtonHover: '3f8db9'

        }
    ];

    let inputs = $('.theme').children('button');

    for (let i = 0; i < inputs.length; i += 1) {
        inputs.eq(i).on('click', function() {
            $('body').css('--nav-main-color', `#${hex[i].navMain}`);
            $('body').css('--nav-hover-color', `#${hex[i].navHover}`);
            $('body').css('--highlight-color', `#${hex[i].navHighlight}`);
            $('body').css('--logo-color', `#${hex[i].navLogo}`);
            $('body').css('--nav-text-color', `#${hex[i].navText}`);
            $('body').css('--nav-drop-shadow-color', `#${hex[i].navShadow}`);

            $('body').css('--body-text-color', `#${hex[i].bodyText}`);
            $('body').css('--page-background-color', `#${hex[i].bodyBackground}`);
            $('body').css('--content-layer-1-color', `#${hex[i].bodyContent1}`);
            $('body').css('--content-layer-2-color', `#${hex[i].bodyContent2}`);
            $('body').css('--content-box-drop-shadow-color', `#${hex[i].bodyShadow}`);
            $('body').css('--button-color', `#${hex[i].bodyButton}`);
            $('body').css('--button-hover-color', `#${hex[i].bodyButtonHover}`);
        });
    } 
});

/*const themeTemplate = `
<button id="navy" class="btn">Navy</button>
<button id="light" class="btn">Light</button>
<button id="dark" class="btn">Dark</button>
`;*/