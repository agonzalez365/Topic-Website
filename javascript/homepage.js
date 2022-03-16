// var modal= document.querySelector("#modal-div");

// $(document).ready(function() {
//     var button = $('.modal-button'); 
//     var modal = $('#modal-div');
//     button.on('click', function(event) {
//         modal.css('display', 'flex');
//         $('body').css('overflow', 'hidden');
//     });
// });
const homeTemplate = `
    <div class="text-box" id="intro">
        <p>Mental health is something that affects everyone. The aim of this site is to provide a place to find resources about mental health, as well as a place to talk about mental health without any of the surrounding stigma.</p>
    </div>

    <div class="page" id="help-grid">

        <div id="game-image">
            <iframe 
                src="https://scratch.mit.edu/projects/617604264/embed" 
                allowtransparency="true" width="100%" height="100%" 
                frameborder="0" scrolling="no" allowfullscreen>
            </iframe>
        </div>

        <div class="text-box">
            <h2>Mind Refresher Game</h2>
            <p>This game is about those with Depression and anxiety.
                Playing games is a great way to get your friends and 
                family members talking and laughing, and this game can 
                act as a distraction from pain and psychological trauma. 
                Video games can help people who are dealing with mental 
                disorders like anxiety, depression, attention deficit 
                hyperactivity disorder (ADHD), and post-traumatic stress 
                disorder(PTSD).
            </p>
            <a href="#" class="here-btn modal-button">Click here to read More!
            </a>
        </div>

        <div class="rank">
            <a href="leaderboard.html" class="ranking" id="first"> 
                <img class="user-img" src="images/leaderboard/nathan.jpg">
                <p>C0rti_Metr00 </p>
            </a>
            <a href="leaderboard.html" class="ranking" id="second">
                <img class="user-img" src="images/leaderboard/sharian.jpg">
                <p>_Yuuki_12</p>
            </a>
            <a href="leaderboard.html" class="ranking" id="third">
                <img class="user-img" src="images/leaderboard/david.jpg">
                <p>Da_S3raph_Sl1dz_</p>
            </a>
        </div>
        
        <div id="activity-snippet">
            <a href="newsfeed.html" id="activity-title">Latest Activity</a>
            <div class="post">
                <a href="#"><img class="user-img" src="images/newsfeed/profile1.jpg" alt="Profile Picture"></a>
                <div>
                    <a href="#" class="name">Alex</a>
                    <p class="user-post">I'm happy to see a game that explores the topic of mental health!</p>
                    <div class="buttons">
                        <div class="like">
                            <a href="#"><span class="like-count">7</span><i class="fas fa-thumbs-up"></i><span>Like</span></a>
                        </div>
                        <div class="reply-button">
                            <a href="#"><i class="fas fa-reply"></i><span>Reply</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="modal-div">
            <div class="modal-content modal-main">
                
                <div>
                    <h2></h2>
                    <div> <button class="close-button"> close when its clicked <a href="#"><img class="exit-image" src="images/xmark-solid.svg" alt="close modal"></a> </button> </div>

                    <p class="black-text"> 
                        this is a place holder text.
                    </p>
                    
                </div>
                
            </div>
            <div class="modal-content modal-more">
                <img src="#">
                <a href="https://news.ecu.edu/2011/02/16/study-casual-video-games-demonstrate-ability-to-reduce-depression-and-anxiety/">Click here for the full article!/</a>
            </div>
        </div> 
    </div>
`;

$('document').ready(function() {
    $('main').addClass('homepage');
    $('main').append(homeTemplate);
    $('#homepage').on('click', function() {
        $('main').empty();
        $('main').removeClass();
        $('main').addClass('homepage');
        $('main').append(homeTemplate);
    })
})
