const body = $('body');

let posts = [
    {
        timestamp: 0,
        name: 'Name',
        profilePic: 'link',
        postContent: 'this is a post',
        likeCount: 0,
        userId: 0,
        postId: 'userId-timestamp',
        replies: [
            {
                postId: 'postId'
            }
        ]
    }
];

let replies = {
    postId: {
        timestamp: 0,
        name: 'Name',
        profilePic: 'link',
        postContent: 'this is a post',
        likeCount: 0,
        userId: 0,
    }
}

$('document').ready(function() {
    $('#create-post').hide();
    $('#create-post').show();

});