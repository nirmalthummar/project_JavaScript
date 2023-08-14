

let myitems = [];
let editindex = -1;

function display()
{
  let myhtml = myitems.map(function(value,index) {

    return `<div><p class="title">${value}</p>
    <div class="btn-container">
    
      <button type="button" class="edit-btn"
      onclick="editItem(${index})"
      >
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" 
      class="delete-btn" onclick="deleteData(${index})">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    </div> `

  })
  
  document.getElementById("display").innerHTML =myhtml.join(" ");

}

function addItem()
{
  let item = document.getElementById("grocery").value;

  if(editindex<0)
  {
    myitems.push(item);
  }
  else
  {
    myitems[editindex] = item;
  }



  console.log(myitems);

  display();

  document.getElementById("grocery").value= "";

}
function deleteData(index)
{

  myitems.splice(index,1);
  display();

}

function editItem(index)
{
  document.getElementById("grocery").value =
  myitems[index];

  editindex = index; 

}

function clearItems()
{
  myitems.splice(0);

  display();
  
}


    