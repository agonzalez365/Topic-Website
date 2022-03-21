//this is for mock account functionality so the page can adapt to user
//not for real accounts
$('document').ready(function() {
    $('create-account').on('click', function() {
        

        const createAccount = $('#create-account');
        console.log(createAccount);
        
        createAccount.on('submit', function(event) {
            event.preventDefault();
            //get inputs
            const childInputs = createAccount.children('input');
            const email = childInputs.eq(0).val();
            const username = childInputs.eq(1).val();
            const password = childInputs.eq(2).val();
            const confirmPass = childInputs.eq(3).val();
            //mock login, will cause issues if existing id is generated
            const userID = Math.round(Math.random() * 1000 + 5);
            const likedPosts = [];
    
            console.log(childInputs);
            console.log(username, email, password, confirmPass);
    
            //only one user can exist in localstorage
            //to-do: check for empty inputs, do not submit
            if(password !== confirmPass){
                alert('Passwords do not match');
            } else {
                const user = {
                    userID,
                    username,
                    email,
                    password,
                    likedPosts
                }
    
                window.localStorage.setItem('user', JSON.stringify(user));
                //redirect to signin
                window.location.href = 'signin.html';
            }
        });
    })
});