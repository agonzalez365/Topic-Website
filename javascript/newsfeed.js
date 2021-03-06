//to-do: change like count to array of userIDs
//change replies to array of postIDs
let latestPosts = [
    {
        profilePic: 'images/newsfeed/profile1.jpg',
        name: 'Alex',
        postContent: 'I\'m happy to see a game that explores the topic of mental health!',
        likeCount: [4, 2, 759],
        userId: 4,
        timestamp: 100,
        postId: 4100, //should be calculated, postId-timestamp
        replies: [
        ]
    },
    {
        profilePic: 'images/newsfeed/profile2.jpg',
        name: 'Rachel',
        postContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis libero dui,
        vel placerat urna consectetur a. Maecenas in pulvinar magna. Praesent porttitor, nibh nec
        consectetur eleifend, leo lacus lacinia leo, vel porta ipsum justo in turpis. Morbi vulputate
        hendrerit orci ac finibus. Sed ullamcorper facilisis venenatis...`,
        likeCount: [2, 1, 3, 4],
        userId: 2,
        timestamp: 50,
        postId: 250,
        replies: [
            {
                profilePic: 'images/newsfeed/profilereply.jpg',
                name: 'Layla',
                postContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis libero dui,
                vel placerat urna consectetur a. Maecenas in pulvinar magna. Praesent porttitor, nibh nec
                consectetur eleifend, leo lacus lacinia leo, vel porta ipsum justo in turpis. Morbi vulputate
                hendrerit orci ac finibus. Sed ullamcorper facilisis venenatis...`,
                likeCount: [3, 2],
                userId: 3,
                timestamp: 75,
                postId: 375,
            },
        ]
    },
    {
        profilePic: 'images/newsfeed/profile3.jpg',
        name: 'Joseph',
        postContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis libero dui,
        vel placerat urna consectetur a. Maecenas in pulvinar magna. Praesent porttitor, nibh nec
        consectetur eleifend, leo lacus lacinia leo, vel porta ipsum justo in turpis. Morbi vulputate
        hendrerit orci ac finibus. Sed ullamcorper facilisis venenatis...`,
        likeCount: [1, 2, 3],
        userId: 1,
        timestamp: 25,
        postId: 150,
        replies: [
        ]
    }
];

const newsFeedTemp = `<h1>Latest Activity...</h1>


<div id="sorting" class="post-submit">
    <label for="sort">Sort by...</label>
    <select name="sort" id="sort">
        <option value="new" id="sort-new">Latest</option>
        <option value="rating" id="sort-rating">Rating</option>
        <option value="old" id="sort-old">Oldest</option>
    </select>
</div>

<div class="post-creation-container">
</div>

<div class="post-container">
</div>
`

$('document').ready(function () {
    $('#newsfeed').on('click', function() {
        //update active class on nav
        $('.active').removeClass();
        $('#newsfeed').addClass('active');

        //adjust page content
        $('main').empty();
        $('main').removeClass();
        $('main').addClass('newsfeed');
        $('main').append(newsFeedTemp);

        if (localStorage.getItem('logged-in') === "true") {
            const user = JSON.parse(localStorage.getItem('user'));
            $('.post-creation-container').append(
                `
                <div id="post-creation" class="post">
                    <div class="img-container">
                        <img src="./images/newsfeed/user.jpg" alt="">
                    </div>
                    <div class="post-content">
                        <div class="username">
                            <span>${user.username}</span>
                        </div>
                        <form>
                            <div>
                                <textarea name="" id="user-post-text" cols="120" rows="10" placeholder="Share your thoughts..."></textarea>
                            </div>
                            <div id="post-btn-container">
                                <input type="submit" id="make-new-post" value="Make Post">
                            </div>
                        </form>
                    </div>
                </div>
                `
            );
        }
    
        //store posts in local storage
        localStorage.setItem('Posts', latestPosts);
    
        //container for existing posts
        const postContainer = $('.post-container');
    
        //function to append post that is supplied
        function displayOperation(post) {
            postContainer.append(
                `
                <div class="thread" id="${post.postId}">

                <div class="post">
                    <div class="img-container">
                        <img src="${post.profilePic}" alt="">
                    </div>
    
                    <div class="post-content">
    
                        <div class="username">
                            <span>${post.name}</span>
                        </div>
    
                        <div class="post-text">
                            <p>${post.postContent}</p>
                        </div>
    
                        <div class="post-btns">
    
                            <div class="like-container">
                                <span class="like-count">${post.likeCount.length}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                            </div>
    
                            <div class="reply-container">
                                <i class="fas fa-reply"></i><span>Reply</span>
                            </div>
    
                        </div>
    
                    </div>
                </div>
                `
            );
            //append replies to post
            if (post.replies.length > 0) {
                const replyPoint = postContainer.find('#' + post.postId);
                for (let i = 0; i < post.replies.length; i += 1) {
                    replyPoint.append(
                        `
                        <div class="post reply" id="${post.replies[i].postId}">

                        <div class="img-container">
                            <img src="${post.replies[i].profilePic}" alt="">
                        </div>
        
                        <div class="post-content">
        
                            <div class="username">
                                <span>${post.replies[i].name}</span>
                            </div>
        
                            <div class="post-text">
                                <p>${post.replies[i].postContent}</p>
                            </div>
        
                            <div class="post-btns">
        
                                <div class="like-container">
                                    <span class="like-count">${post.replies[i].likeCount.length}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                </div>
        
                                <div class="reply-container">
                                    <i class="fas fa-reply"></i><span>Reply</span>
                                </div>
        
                            </div>
        
                        </div>
        
                        </div>
                        `
                    );
                }
            }
        }
    
        //display functions
        function displayLatest() {
            postContainer.empty();
            latestPosts.forEach((post) => {
                displayOperation(post);
            });
        }
        function displayOldest() {
            postContainer.empty();
            latestPosts.slice().reverse().forEach((post) => {
                displayOperation(post);
            });
        }
        function displayRating() {
            postContainer.empty();
            let postsByRating = latestPosts.slice().sort(function (a, b) {
                //move to front if rating is higher
                if (a.likeCount.length > b.likeCount.length) {
                    return -1;
                }
                //move to back if rating is lower
                if (a.likeCount.length < b.likeCount.length) {
                    return 1;
                }
                //dont move if equal
                return 0;
            });
            postsByRating.forEach((post) => {
                displayOperation(post);
            });
    
        }
    
        //initial page population
        //display depending on sort setting
        const selection = $('#sort');
        if (selection.val() === 'new') {
            displayLatest();
        }
        else if (selection.val() === 'rating') {
            displayRating();
        }
        else {
            displayOldest();
        }
    
        //sorting
    
        //sort by oldest
        const sortByOldest = $('#sort-old');
        sortByOldest.on('click', function () {
            displayOldest();
        });
    
        //sort by newest
        const sortByNewest = $('#sort-new')
        sortByNewest.on('click', function () {
            displayLatest();
        });
    
        //sort by rating
        const sortByRating = $('#sort-rating');
        sortByRating.on('click', function () {
            displayRating();
        });
    
        //post creation
        //should be hiddden if not logged in
        const createPostBtn = $('#make-new-post');
        createPostBtn.on('click', function (event) {
            event.preventDefault();
            if (localStorage.getItem('user') !== null) {
                const user = JSON.parse(localStorage.getItem('user'));
                const postText = $('#user-post-text').val();
                const newPost = {
                    profilePic: 'images/newsfeed/user.jpg',
                    name: user.username,
                    postContent: postText,
                    likeCount: [user.userId],
                    userId: user.userId,
                    timestamp: Date.now(),
                    postId: latestPosts.length + 1,
                    replies: [
                    ]
                };
                //add to front array
                latestPosts.unshift(newPost);
                //update local storage
                localStorage.setItem('Posts', latestPosts);
    
                //display based on sorting
                if (selection.val() === 'new') {
                    displayLatest();
                }
                else if (selection.val() === 'rating') {
                    displayRating();
                }
                else {
                    displayOldest();
                }
    
                //update like events
                //isssue: resets likes
                likeCountUpdate();
                replyUpdate();
    
            }
    
    
    
    
    
    
        });
    
        // if user is logged in, apply what posts they have liked
        // if (localStorage.getItem('user') !== null && localStorage.getItem('logged-in') === "true") {
        //     const user = JSON.parse(localStorage.getItem('user'));
        //     latestPosts.forEach((post) => {
        //         for(let i = 0; i < user.likedPosts.length; i += 1){
        //             post.likeCount.forEach((like) => {
        //                 if(like === user.likedPosts[i]){
        //                     liked = true;
        //                 }
        //             });
        //         }
        //     });
        // }
    
        //like counts
        //need to update to store user's likes
        function likeCountUpdate() {
            const likeButtons = $('.like');
            for (let i = 0; i < likeButtons.length; i += 1) {
                //CHANGE LATER: defaults to false for now, likes not stored by account yet
                let liked = false;
                likeButtons.eq(i).on('click', function () {
                    //if signed in, proceed, else notify user
                    if (localStorage.getItem('logged-in') === "true" && localStorage.getItem('user') !== null) {
                        let likeBtn = $(this);
                        let countCont = likeBtn.children('.like-count');
                        let count = countCont.text();
                        //if not liked, update to liked, else reset
                        if (!liked) {
                            likeBtn.children().eq(2).text('Liked');
                            countCont.text(Number(count) + 1);
                            liked = true;
                        }
                        else {
                            likeBtn.children().eq(2).text('Like');
                            countCont.text(Number(count) - 1);
                            liked = false;
                        }
                    }
                    else {
                        alert('Cannot like: Not signed in.');
                    }
                });
            }
        }
    
        likeCountUpdate();
    
        //reply functionality
        function replyUpdate() {
            const replyButtons = $('.reply-button');
            for (let i = 0; i < replyButtons.length; i += 1) {
                replyButtons.eq(i).on('click', function () {
                    //TO DO: Add reply to latestPosts
                    //update display after would work but not efficient
                    console.log('click');
                });
            }
        }
    
        replyUpdate();
    })

    //add post creation if user is logged in
    

});