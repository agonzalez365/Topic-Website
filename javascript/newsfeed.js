const body = $('body');

//to-do: figure out timestamps
let posts = [
    {
        profilePic: 'images/newsfeed/profile1.jpg',
        name: 'Alex',
        postContent: 'I\'m happy to see a game that explores the topic of mental health!',
        likeCount: 7,
        userId: 5,
        timestamp: 100,
        postId: 5100, //should be calculated, postId-timestamp
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
        likeCount: 15,
        userId: 4,
        timestamp: 50,
        postId: 450, //should be calculated, postId-timestamp
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
        likeCount: 42,
        userId: 2,
        timestamp: 50,
        postId: 250, //should be calculated, postId-timestamp
        replies: [
        ]
    }
];

// const mainContainer = $('main');
// console.log(mainContainer);
// posts.forEach((post) => {
//     mainContainer.append(
//         `
//         <p>test</p>
//         `
//     )
// });

// let replies = {
//     postId: {
//         timestamp: 0,
//         name: 'Name',
//         profilePic: 'link',
//         postContent: 'this is a post',
//         likeCount: 0,
//         userId: 0,
//     }
// }

// outputs same time sometimes
// console.log(Date.now());
// console.log(Date.now());
// console.log(Date.now());

$('document').ready(function() {
    //hide post creation if user is not logged in
    if(localStorage.getItem('logged-in') === "false"){
        $('#create-post').hide();
    }

    //initial page population
    const mainContainer = $('main');
    posts.forEach((post) => {
        //if there are replies, use reply template, else, don't
        //only works with one reply, need to update
        if(post.replies.length > 0){
            mainContainer.append(
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
                                <span class="like-count">15</span><i class="fas fa-thumbs-up"></i><span>Like</span>
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
            mainContainer.append(
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

    //sorting

    //sort by oldest
    const sortByOldest = document.getElementById('sort-old');
    console.log(sortByOldest);
    sortByOldest.addEventListener('click', function() {
        console.log('clicked');
    });

    //like counts
    const likeButtons = document.getElementsByClassName('like');
    for(let i = 0; i < likeButtons.length; i += 1){
        likeButtons[i].addEventListener('click', function() {
            console.log(likeButtons[i].children);
        });
    }

});