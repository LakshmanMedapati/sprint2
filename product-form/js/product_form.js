
// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController(0);

// Select the New Item Form
const newItemForm = document.querySelector('#newItemForm');

//const image=''

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.querySelector('#newItemName');
    const newItemcategory = document.querySelector('#newItemcategory');
    const newItemprice = document.querySelector('#newItemprice');
    const newItemDescription = document.querySelector('#newItemDescription');
    //const newItemImageUrl = "file:///C:/Users/laksh/Documents/Visual%20Studio%20Code/sprint-2/images/th.jpg"
    const newItemImageUrl=  document.querySelector('#newItemImageUrl');
    
    
    //var newItemImageUrl= path.replace(/^.*\\/,"");
    
   
    

    // Get the values of the inputs
    const name = newItemName.value;
    const category = newItemcategory.value;
    const price = newItemprice.value;
    const description = newItemDescription.value;

    const img =newItemImageUrl.value;
    const imageUrl=img.replace('"', "");
   
    

   
    
    /*imageUrl.addEventListener("change",()=>{
        const url=new FileReader();
        url.readAsDataURL(imageUrl.files[0]);
        url.addEventListener("load",()=>{
             imageUrl=url.result;
        })
        console.log(imageUrl)
    })
    console.log("2"+imageUrl)*/
    /*
        Validation code here
    */

    // Add the item to the ItemsController
    itemsController.addItem(name,category, price, description, imageUrl);
    //itemsController.addImgItem(imageUrl)

    // Clear the form
    newItemName.value = '';
    newItemcategory.value = '';
    newItemprice.value = '';
    newItemDescription.value = ''; 
    newItemImageUrl.value = '';
});



/*var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(reader.result)
  };*/


/*function getImagePreview(event){
     var image=URL.createObjectURL(event.target.files[0])
    //console.log(image)
    var imagediv=document.getElementById('newItemImageUrl')
    var newimage=document.createElement('img')
    imagediv.innerHTML=''
    newimage.src=image
    newimage.width="100"
    imagediv.appendChild(newimage)
}*/

/*function theimage(){
    var filename =document.getElementById('newItemImageUrl').value;
    document.getElementById('file_path').value = filename;
    alert(filename);
}*/
