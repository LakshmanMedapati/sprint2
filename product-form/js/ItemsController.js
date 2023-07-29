// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, category, price, description, imageUrl) {
        const item = {
            // Increment the currentId property and pass the values into  item
            id: this.currentId++,
            name: name,
            category: category,
            price: price,
            description: description,
            imageUrl: imageUrl


        };


        // Push the item to the items property
        this.items.push(item);

        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));

    }

}