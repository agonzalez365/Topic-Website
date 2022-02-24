//to-do: change like count to array of userIDs
//change replies to array of postIDs
let latestPosts = [
    {
        profilePic: 'images/newsfeed/profile1.jpg',
        name: 'Alex',
        postContent: 'I\'m happy to see a game that explores the topic of mental health!',
        likeCount: 7,
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
        likeCount: 45,
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
                likeCount: 12,
                userId: 3,
                timestamp: 75,
                postId: 375,
            }
        ]
    },
    {
        profilePic: 'images/newsfeed/profile3.jpg',
        name: 'Joseph',
        postContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis libero dui,
        vel placerat urna consectetur a. Maecenas in pulvinar magna. Praesent porttitor, nibh nec
        consectetur eleifend, leo lacus lacinia leo, vel porta ipsum justo in turpis. Morbi vulputate
        hendrerit orci ac finibus. Sed ullamcorper facilisis venenatis...`,
        likeCount: 43,
        userId: 1,
        timestamp: 25,
        postId: 150, 
        replies: [
        ]
    }
];

$('document').ready(function() {
    const postContainer = $('.post-container');
    //hide post creation if user is not logged in
    if(localStorage.getItem('logged-in') === "false"){
        $('#create-post').hide();
    }

    //display functions
    function displayLatest(){
        postContainer.empty();
        latestPosts.forEach((post) => {
            //if there are replies, use reply template, else, don't
            //only works with one reply, need to update
            if(post.replies.length > 0){
                postContainer.append(
                    `
                    <div class="post">
                        <div>
                            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                        </div>
                        <div>
                            <div>
                                <a href="#" class="name">${post.name}</a>
                                <p class="user-post">${post.postContent}</p>
                            </div>
                            <div class="buttons">
                                <div class="like">
                                    <span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                </div>
                                <div class="reply-button">
                                    <i class="fas fa-reply"></i><span>Reply</span>
                                </div>
                            </div>
    
                            <div class="reply">
                                <a href="#"><img src="${post.replies[0].profilePic}" alt="Profile Picture"></a>
                                <div>
                                    <a href="#" class="name">${post.replies[0].name}</a>
                                    <p class="user-post">${post.replies[0].postContent}</p>
    
                                    <div class="buttons">
                                        <div class="like">
                                            <span class="like-count">${post.replies[0].likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                        </div>
                                        <div class="reply-button">
                                            <i class="fas fa-reply"></i><span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    `
                );
            }
            else {
                postContainer.append(
                    `
                    <div class="post">
                        <div>
                            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                        </div>
                        <div>
                            <div>
                                <a href="#" class="name">${post.name}</a>
                                <p class="user-post">${post.postContent}</p>
                            </div>
                            <div class="buttons">
                                <div class="like">
                                    <span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
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
        });
    }
    function displayOldest(){
        postContainer.empty();
        latestPosts.slice().reverse().forEach((post) => {
            if(post.replies.length > 0){
                postContainer.append(
                    `
                    <div class="post">
                        <div>
                            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                        </div>
                        <div>
                            <div>
                                <a href="#" class="name">${post.name}</a>
                                <p class="user-post">${post.postContent}</p>
                            </div>
                            <div class="buttons">
                                <div class="like">
                                    <span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                </div>
                                <div class="reply-button">
                                    <i class="fas fa-reply"></i><span>Reply</span>
                                </div>
                            </div>
    
                            <div class="reply">
                                <a href="#"><img src="${post.replies[0].profilePic}" alt="Profile Picture"></a>
                                <div>
                                    <a href="#" class="name">${post.replies[0].name}</a>
                                    <p class="user-post">${post.replies[0].postContent}</p>
    
                                    <div class="buttons">
                                        <div class="like">
                                            <span class="like-count">${post.replies[0].likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                        </div>
                                        <div class="reply-button">
                                            <i class="fas fa-reply"></i><span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    `
                );
            }
            else {
                postContainer.append(
                    `
                    <div class="post">
                        <div>
                            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                        </div>
                        <div>
                            <div>
                                <a href="#" class="name">${post.name}</a>
                                <p class="user-post">${post.postContent}</p>
                            </div>
                            <div class="buttons">
                                <div class="like">
                                    <span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
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
        });
    }
    function displayRating(){
        postContainer.empty();
        let postsByRating = latestPosts.slice().sort(function (a, b) {
            if (a.likeCount > b.likeCount) {
                return -1;
            }
            if(a.likeCount < b.likeCount) {
                return 1;
            }
            return 0;
        });
        postsByRating.forEach((post) => {
            //if there are replies, use reply template, else, don't
            //only works with one reply, need to update
            if(post.replies.length > 0){
                postContainer.append(
                    `
                    <div class="post">
                        <div>
                            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                        </div>
                        <div>
                            <div>
                                <a href="#" class="name">${post.name}</a>
                                <p class="user-post">${post.postContent}</p>
                            </div>
                            <div class="buttons">
                                <div class="like">
                                    <span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                </div>
                                <div class="reply-button">
                                    <i class="fas fa-reply"></i><span>Reply</span>
                                </div>
                            </div>
    
                            <div class="reply">
                                <a href="#"><img src="${post.replies[0].profilePic}" alt="Profile Picture"></a>
                                <div>
                                    <a href="#" class="name">${post.replies[0].name}</a>
                                    <p class="user-post">${post.replies[0].postContent}</p>
    
                                    <div class="buttons">
                                        <div class="like">
                                            <span class="like-count">${post.replies[0].likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
                                        </div>
                                        <div class="reply-button">
                                            <i class="fas fa-reply"></i><span>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    `
                );
            }
            else {
                postContainer.append(
                    `
                    <div class="post">
                        <div>
                            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
                        </div>
                        <div>
                            <div>
                                <a href="#" class="name">${post.name}</a>
                                <p class="user-post">${post.postContent}</p>
                            </div>
                            <div class="buttons">
                                <div class="like">
                                    <span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span>
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
        });

    }
    //initial page population
    //display depending on sort setting
    const selection = $('#sort');
    if(selection.val() === 'new'){
        displayLatest();
    }
    else if(selection.val() === 'rating'){
        displayRating();
    }
    else {
        displayOldest();
    }

    //sorting

    //sort by oldest
    const sortByOldest = $('#sort-old');
    sortByOldest.on('click', function() {
        displayOldest();
    });

    //sort by newest
    const sortByNewest = $('#sort-new')
    sortByNewest.on('click', function() {
        displayLatest();
    });

    //sort by rating
    const sortByRating = $('#sort-rating');
    sortByRating.on('click', function() {
        displayRating();
    });

    //post creation
    const createPostBtn = $('#post-button');
    createPostBtn.on('click', function(event) {
        event.preventDefault();
        const postText = document.getElementById('post-text').value;
        const newPost = {
            profilePic: 'images/newsfeed/user.jpg',
            name: 'User',
            postContent: postText,
            likeCount: 0,
            userId: latestPosts.length + 1,
            timestamp: Date.now(),
            postId: latestPosts.length + 1,
            replies: [
            ]
        }

        //add to array
        latestPosts.unshift(newPost);

        //display based on sorting
        if(selection.val() === 'new'){
            displayLatest();
        }
        else if(selection.val() === 'rating'){
            displayRating();
        }
        else {
            displayOldest();
        }
        

    });  

    //like counts
    const likeButtons = $('.like');
    for (let i = 0; i < likeButtons.length; i += 1){
        //CHANGE LATER: defaults to false for now, likes not stored by account yet
        let liked = false;
        likeButtons.eq(i).on('click', function() {
            //if signed in, proceed, else notify user
            if(localStorage.getItem('logged-in') === "true"){
                let likeBtn = $(this);
                let countCont = likeBtn.children('.like-count');
                let count = countCont.text();
                //if not liked, update to liked, else reset
                if(!liked){
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

    //reply functionality
    const replyButtons = $('.reply-button');
    for (let i = 0; i < replyButtons.length; i += 1){
        replyButtons.eq(i).on('click', function() {
            console.log('clicked');
        });
    }
});