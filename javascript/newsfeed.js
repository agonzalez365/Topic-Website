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

$('document').ready(function () {
    //add post creation if user is logged in
    if (localStorage.getItem('logged-in') === "true") {
        const user = JSON.parse(localStorage.getItem('user'));
        $('.post-creation').append(
            `
            <div class="post" id="create-post">
                <a href="#"><img src="images/newsfeed/user.jpg" alt="Profile Picture"></a>
                <div>
                    <a href="#" class="name">${user.username}</a>
                    <form>
                        <textarea name="post-text" id="post-text" class="user-post" placeholder="Share your thoughts..."
                        rows="4" maxlength="500"></textarea>
                        <div>
                        <input type="submit" name="user-create-post" value="Post" id="post-button">
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
            <div class="post" id="${post.postId}">
                <div>
                    <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                </div>
                <div class="post-content">
                    <div>
                        <a href="#" class="name">${post.name}</a>
                        <p class="user-post">${post.postContent}</p>
                    </div>
                    <div class="buttons">
                        <div class="like">
                            <span class="like-count">${post.likeCount.length}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                        </div>
                        <div class="reply-button">
                            <i class="fas fa-reply"></i><span>Reply</span>
                        </div>
                    </div>

                </div>
            </div>
            `
        );
        //append replies to post
        if (post.replies.length > 0) {
            const replyPoint = postContainer.find('#' + post.postId).children().eq(1);
            for (let i = 0; i < post.replies.length; i += 1) {
                replyPoint.append(
                    `
                    <div class="reply" id="${post.replies[i].postId}">
                            <a href="#"><img src="${post.replies[i].profilePic}" alt="Profile Picture"></a>
                            <div>
                                <a href="#" class="name">${post.replies[i].name}</a>
                                <p class="user-post">${post.replies[i].postContent}</p>

                                <div class="buttons">
                                    <div class="like">
                                        <span class="like-count">${post.replies[i].likeCount.length}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                    </div>
                                    <div class="reply-button">
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
    const createPostBtn = $('#post-button');
    createPostBtn.on('click', function (event) {
        event.preventDefault();
        if (localStorage.getItem('user') !== null) {
            const user = JSON.parse(localStorage.getItem('user'));
            const postText = document.getElementById('post-text').value;
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
    const replyButtons = $('.reply-button');
    for (let i = 0; i < replyButtons.length; i += 1) {
        replyButtons.eq(i).on('click', function () {
            console.log('clicked');
        });
    }

});