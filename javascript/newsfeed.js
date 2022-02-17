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
            {
                postId: 'postId'
            }
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
            {
                postId: 'postId'
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
        userId: 3,
        timestamp: 50,
        postId: 350, //should be calculated, postId-timestamp
        replies: [
            {
                postId: 'postId'
            }
        ]
    }
];

console.log(posts);

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

    const mainContainer = $('main');
    console.log(mainContainer);
    posts.forEach((post) => {
    mainContainer.append(
        `
        <div class="post">
            <a href="#"><img src="${post.profilePic}" alt="Profile Picture"></a>
            <div>

                <a href="#" class="name">${post.name}</a>
                <p class="user-post">${post.postContent}</p>
                <div class="buttons">
                    <div class="like">
                        <a href="#"><span class="like-count">${post.likeCount}</span><i class="fas fa-thumbs-up"></i><span>Like</span></a>
                    </div>
                    <div class="reply-button">
                        <a href="#"><i class="fas fa-reply"></i><span>Reply</span></a>
                    </div>
                </div>

            </div>
        </div>
        `
    );
});

});