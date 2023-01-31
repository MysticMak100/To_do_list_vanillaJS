var addform = document.getElementById("addForm");
var items = document.getElementById("items");
var itemsnew = document.getElementById("items");
// var db=document.getElementById('b')
addform.addEventListener("submit", addItem);
items.addEventListener("click", delItem);
// itemsnew.addEventListener('click', editItem);

var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItem);
function addItem(e) {
  e.preventDefault();
  var text = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(text));
  // console.log('1');
  var delbtn = document.createElement("button");
  var editbtn = document.createElement("button");
  editbtn.className = "edit";
  editbtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editbtn);
  delbtn.className = "btn btn-danger btn-sm float-right delete";
  //    delbtn.id='b';
  delbtn.appendChild(document.createTextNode("X"));
  li.appendChild(delbtn);

  items.appendChild(li);
}
function delItem(e) {
  if (e.target.classList.contains("btn-danger")) {
    var li = e.target.parentElement;
    items.removeChild(li);
  } else {
    if (e.target.classList.contains("edit")) {
      var li = e.target.parentElement;
      var firChild = li.firstChild;
      li.removeChild(firChild);
      li.removeChild(e.target);

      // var form=document.createElement('form');
      // form.setAttribute()
      var box = document.createElement("input");
      box.type = "text";
      box.value = "";
      box.id = "thebox";
      var lChild = li.lastChild;
      firChild = li.firstChild;
      li.insertBefore(box, firChild);
      var savebutton = document.createElement("input");
      savebutton.type = "button";
      savebutton.value = "save";
      savebutton.className = "savebox";
      li.insertBefore(savebutton, lChild);

      // console.log(box.parentElement);
      items.addEventListener("click", save);
      // li.appendChild(box);
      // var val=prompt("TYPE YOUR EDIT");
    }
  }
}
function save(e) {
  if (e.target.classList.contains("savebox")) {
    // e.preventDefault;

    var li = e.target.parentElement;
    // console.log(li.firstChild)
    var nv = document.getElementById("thebox").value;
    var newval = document.createTextNode(nv);
    // var li=impel.parentElement;
    // console.log(li)
    // li.removeChild(impel);

    var firsChild = li.firstChild;
    // var items=li.parentElement
    li.removeChild(firsChild);
    li.removeChild(e.target);
    firsChild = li.firstChild;
    li.insertBefore(newval, firsChild);

    var editbutton = document.createElement("input");
    editbutton.type = "button";
    editbutton.value = "Edit";
    editbutton.className = "edit btn";
    lChild = li.lastChild;
    li.insertBefore(editbutton, lChild);
    // li.append(newval);
    //    e.target.textContent="Edit"
  }
}
function filterItem(e) {
  var textsearch = e.target.value;
  var li = document.getElementsByTagName("li");
  Array.from(li).forEach((element) => {
    var x = element.firstChild.textContent;
    if (x.indexOf(textsearch) != -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
// function editItem(e) {
//     if(e.target.classList.contains('edit')){
//         var li=e.target.parentElement;
//         console.log(4);
//     }
// }
