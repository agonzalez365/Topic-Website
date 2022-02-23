//to-do: figure out timestamps
let latestPosts = [
    {
        profilePic: 'images/newsfeed/profile1.jpg',
        name: 'Alex',
        postContent: 'I\'m happy to see a game that explores the topic of mental health!',
        likeCount: 7,
        userId: 5,
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
        userId: 4,
        timestamp: 50,
        postId: 250, //should be calculated, postId-timestamp
        replies: [
            //to-do, make reference
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
                postId: 375, //should be calculated, postId-timestamp
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
        userId: 2,
        timestamp: 25,
        postId: 150, //should be calculated, postId-timestamp
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
    displayLatest();

    //post creation
    const createPostBtn = document.getElementById('post-button');
    createPostBtn.addEventListener('click', function(event) {
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

        latestPosts.unshift(newPost);
        console.log(latestPosts);
        displayLatest();

    });

    //sorting

    //sort by oldest
    const sortByOldest = document.getElementById('sort-old');
    sortByOldest.addEventListener('click', function() {
        displayOldest();
    });

    //sort by newest
    const sortByNewest = document.getElementById('sort-new')
    sortByNewest.addEventListener('click', function() {
        displayLatest();
    });

    //sort by rating
    const sortByRating = document.getElementById('sort-rating');
    sortByRating.addEventListener('click', function() {
        //TO DO: Sorting algorithm
        displayRating();
    });
    

    //like counts
    const likeButtons = document.getElementsByClassName('like');
    for(let i = 0; i < likeButtons.length; i += 1){
        likeButtons[i].addEventListener('click', function() {
            //TO DO: increment count
        });
    }

})