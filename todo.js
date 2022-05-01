
myform=document.getElementById('myform');
myinput=document.getElementById('myinput');
myvalue=document.getElementById('myvalue');

myform.addEventListener("submit",(data)=>{
    data.preventDefault()
    createitem(myinput.value);
})
createitem=(d)=>
{
let myformat=`<li>${d}<button onclick="deleteitem(this)">Delete</button></li>`
myvalue.insertAdjacentHTML('beforeend',myformat);
myinput.value="";
}
deleteitem=(x)=>{
x.parentElement.remove();
}
