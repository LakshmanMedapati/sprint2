// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);


function addItemCard(item){
    //var image=item.imageurl.replace(/^C:\fakepath\\/, "")
 
    //console.log(image)
    //console.log(imageUrl)
    const itemHTML = '<div class="card" style="width:21.3rem;">\n' +
        '    <img src="'+item.imageUrl+'" height="300" alt="'+item.imageUrl+'">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '          <h6 class="card-text">'+item.price+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
       '        <a href="#" class="btn btn-primary" style="">open</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    if(item.category==="Electronics"){
        const itemsContainer = document.getElementById("Electronics");
        itemsContainer.innerHTML += itemHTML;
    }
    else{
        const itemsContainer = document.getElementById("Beauty");
        itemsContainer.innerHTML += itemHTML;
    }
}
function loadStorageSampleData(){
    if(!localStorage.getItem("items")){
        const sampleItems = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Ruffles Chicken',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'description':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
    }
}

function loadCardsListFromItemsController(){
    for(var i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);

        
    }

    /*for(var i = 0, size = itemsController.imgItem.length; i < size ; i++){
        const imageUrl = itemsController.imgItemtem[i];
        addimgItem(imageUrl);
        
    }*/
    
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
