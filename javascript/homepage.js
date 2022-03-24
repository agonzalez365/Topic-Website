$('document').ready(function() {
    $('main').addClass('homepage');
    const homeData = {
        intro: 'Mental health is something that affects everyone. The aim of this site is to provide a place to find resources about mental health, as well as a place to talk about mental health without any of the surrounding stigma.',
        gameLink: 'https://scratch.mit.edu/projects/617604264/embed',
        gameTitle: 'Mind Refresher Game',
        gameDesc: 'This game is about those with Depression and anxiety. Playing games is a great way to get your friends and family members talking and laughing, and this game can act as a distraction from pain and psychological trauma. Video games can help people who are dealing with mental disorders like anxiety, depression, attention deficit hyperactivity disorder (ADHD), and post-traumatic stress disorder(PTSD).',
        ranks: [
            {
                name: 'C0rti_Metr00',
                rank: 'first',
                image: 'images/leaderboard/nathan.jpg',
            },
            {
                name: '_Yuuki_12',
                rank: 'second',
                image: 'images/leaderboard/sharian.jpg',
            },
            {
                name: 'Da_S3raph_Sl1dz_',
                rank: 'third',
                image: 'images/leaderboard/david.jpg',
            }
        ],
        latestPost: {
            userName: 'Alex',
            userImg: 'images/newsfeed/profile1.jpg',
            userPost: "I'm happy to see a game that explores the topic of mental health!",
            likeCount: 7,
        }
    };

    const homeTemplate = `
        <div class="text-box" id="intro">
            <p>${homeData.intro}</p>
        </div>

        <div class="page" id="help-grid">

            <div id="game-image">
                <iframe 
                    src="${homeData.gameLink}" 
                    allowtransparency="true" width="100%" height="100%" 
                    frameborder="0" scrolling="no" allowfullscreen>
                </iframe>
            </div>

            <div class="text-box">
                <h2>${homeData.gameTitle}</h2>
                <p>${homeData.gameDesc}</p>
                <a href="#" class="here-btn modal-button">Click here to read More!
                </a>
            </div>

            <div class="rank">
            </div>
            
            <div id="activity-snippet">
                <a id="news-btn" href="#" id="activity-title">Latest Activity</a>
                <div class="post">
                    <a href="#"><img class="user-img" src="${homeData.latestPost.userImg}" alt="Profile Picture"></a>
                    <div>
                        <a href="#" class="name">${homeData.latestPost.userName}</a>
                        <p class="user-post">${homeData.latestPost.userPost}</p>
                        <div class="buttons">
                            <div class="like">
                                <a href="#"><span class="like-count">${homeData.latestPost.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span></a>
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
                    <div  style="
                    height: 100%; 
                    ">
                       <div style=" 
                       display: grid;
                       grid-template-columns: 10fr 1fr;
                       height: 15%;
                       "> 
                            <div  style="
                            display: flex; 
                            justify-content: center;
                            align-items: center;
                            ">
                            <h2> MHA (Mental Health Awareness)!</h2>
                        </div> 
                            <button class="close-button" style=" 
                                border: none;
                                background-color: white;
                                height: 100%; 
                                ">
                                <a href="#" style="
                                height: 100%;
                                width: 100%;
                                ">
                                    <img class="exit-image" src="images/xmark-solid.svg" alt="close modal">
                                </a>
                            </button>
                        </div>
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
    $('main').append(homeTemplate);

    let rankings = function() {
        // loop over ranks in homeData object
        homeData.ranks.forEach((user) => {
            const { rank, image, name } = user;
            // using template literals insert values into template
            let rankTemplate = `
                <a href="#" class="ranking" id="${rank}">
                    <img class="user-img" src="${image}">
                    <p>${name}</p>
                </a>
            `;
            // append template to rank class using jQuery
            $('.rank').append(rankTemplate);
        });
    }

    rankings();

    $('#homepage').on('click', function() {
        $('main').empty();
        $('main').removeClass();

        $('main').addClass('homepage');
        $('main').append(homeTemplate);

        rankings();
    });

    $('#news-btn').on('click', function() {
        // take user to newsfeed
    });

    const button = $('.modal-button'); 
    const modal = $('#modal-div');

    button.on('click', function(event) {
        modal.css('display', 'flex');
        $('body').css('overflow', 'hidden');
    });

    const closeModal = $('.close-button');

    closeModal.on('click', function(e) {
        modal.css('display', 'none');
        $('body').css('overflow', 'auto');  
    })
    
});
