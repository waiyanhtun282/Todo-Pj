const  inputTextTag =document.querySelector('#inputText');
const addBtnTag = document.querySelector('#addBtn');
const ulListTag = document.querySelector('#ulList');
// const buttonsChecked =document.querySelector("#btnChecked");


// createLi

const createLi = (text) => {
const dynamicId = "check" + Date.now();

  const li = document.createElement('li');
  
  li.className=  " list-group-item border-dark d-flex justify-content-between align-items-center ";
  
  li.innerHTML = `
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="${dynamicId}"
  onchange="check(event)">
  <label class="form-check-label text-label" for="${dynamicId}">
    ${text} 
  </label>

</div>
 <div class="  btn-group">
  <button onclick="del(event)" class=" btn btn-sm btn-outline-danger">
    <i class="bi bi-trash3 pe-none"></i>
  </button>
  <button onclick="edit(event)" class=" btn btn-sm btn-outline-info">
    <i class="bi bi-pencil pe-none"></i>
  </button>
 </div>

  `;

  return li;
};

// check
const check = (event) => {
  // console.log(event.target.nextElementSibling);
  const text = event.target.nextElementSibling;
  text.classList.toggle('text-decoration-line-through');

  const checkedList =ulListTag.querySelectorAll(':checked').length;
}


// before text
const p =document.createElement('p');
p.innerText ="Your List";
ulListTag.before(p);


// after text

const listCount =document.createElement('p');
listCount.classList.add('mt-3');
ulListTag.after(listCount);

const listCounter = () => {
  const total =ulListTag.children.length
  // console.log(total);

  if(total){
    listCount.innerText = "Count :" + ulListTag.children.length 
  }else{
    listCount.innerText = null;
  }
}

// edit text
const edit = (event) => {
  // console.log(event.target);
  const currentElement=event.target.closest("li").querySelector('.text-label');
  // console.log(currentElement.innerText);
  let newText=prompt("New Text Edit",currentElement.innerText)
  // console.log(newText);
  currentElement.innerText =newText

  
};



// const del
const del = (event) => {
if(confirm("Are you sure,you want to delete this"))
 {
  event.target.closest('li').remove();
  }
  listCounter();
}


// click button
const buttonClick =  () => {
  // console.log(event.target);
   if(inputTextTag.value.trim()){
    ulListTag.append(createLi(inputTextTag.value));
   inputTextTag.value=null;
   listCounter();
   }
  }

addBtnTag.addEventListener('click',buttonClick);

inputTextTag.addEventListener('keyup', (event) => {
  if(event.keyCode ===13){
    buttonClick();
  }
});