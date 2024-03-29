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
            //console.log("User logged");
            updateUserOrder(productId, action);
        }
    })
};

function updateUserOrder(productId, action){
    console.log('User logged in...');
    var url = '/update_item/';
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrftoken, 
        },
        body:JSON.stringify({'productId':productId, 'action':action})
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log('dane: ',data)
        location.reload();
    });
}