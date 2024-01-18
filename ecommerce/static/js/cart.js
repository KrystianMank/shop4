var updateBtns = document.getElementsByClassName("update-cart");

for(var i=0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product;
        var action = this.dataset.action;

        console.log('ID: ',productId, ' Action: ',action);
        console.log('User: ',user);
        if(user == 'AnonymousUser'){
            console.log("User not logged");
        }
        else{
            console.log("User logged");
        }
    })
};
