
// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController(0);

// Select the New Item Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.querySelector('#newItemName');
    const newItemcategory = document.querySelector('#newItemcategory');
    const newItemprice = document.querySelector('#newItemprice');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');


    // Get the values of the inputs
    const name = newItemName.value;
    const category = newItemcategory.value;
    const price = newItemprice.value;
    const description = newItemDescription.value;
    const img = newItemImageUrl.value;

    //replace quotes with empty
    const imageUrl = img.replace('"', "");



    // Add the item to the ItemsController
    itemsController.addItem(name, category, price, description, imageUrl);

    // Clear the form
    newItemName.value = '';
    newItemcategory.value = '';
    newItemprice.value = '';
    newItemDescription.value = '';
    newItemImageUrl.value = '';
});

