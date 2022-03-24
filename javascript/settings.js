const settings = `    <div id="Settings">
<ul class="categories">
    <li class="subs">
        Account Info
        <ul>
            <li>Username</li>
            <li>Display Name</li>
            <li>Password</li>
            <li>Email Address</li>
            <li>Account Status</li>
        </ul>
    </li>
    <li class="subs">
        Theme Changes
        <ul>
            <li class="theme"><button id="navy" class="btn">Navy</button></li>
            <li class="theme"><button id="light" class="btn">Light</button></li>
            <li class="theme"><button id="dark" class="btn">Dark</button></li> 
        </ul>
    </li>
    <li class="subs">
        Profile Settings
        <ul>
            <li>Change Display Name</li>
            <li>Change Display Caption</li>
            <li>Account Reset</li>
        </ul>
    </li>
    <li class="subs">
        Privacy Settings
        <ul>
            <li>Password Reset</li>
            <li>Account Visibility</li>
            <li>Permissions</li>
            <li>Terms of Service</li>
        </ul>
    </li>
</ul>
</div>`

$(document).ready(function() {
    $('#settings').on('click', function() {
        //update active class on nav
        $('.active').removeClass();
        $('#settings').addClass('active');

        //adjust page content
        $('main').empty();
        $('main').removeClass();
        $('main').addClass('leaderboard');
        $('main').append(settings);
    })
})