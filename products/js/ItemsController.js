// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        //this.imgItem = [];
        this.currentId = currentId;
        //this.loadItemsFromLocalStorage();
    }

    // Create the addItem method
    addItem(name, category, price, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            category: category,
            price: price,
            description: description,
            imageUrl :imageUrl

        };


        // Push the item to the items property
        this.items.push(item);
        
    }
    /*addimgItem(imageUrl) {
        const imageUrl=imageUrl;
        this.imgItem.push(imageUrl);
    }*/
    



    // Create the addItem method
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }

        /*const imageItems = localStorage.getItem("imgitem")
        if (imageItems) {
            const imageItems= JSON.parse(imageItems)

            for (var i = 0, size = imageItems.length; i < size; i++) {
                const imageItem = imageItems[i];
            this.imgItem.push(imageItem);
            }

        }*/
    }
}


