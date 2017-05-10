var row = document.querySelector(".row");
var number =Math.floor((Math.random()*8)+1);


for (var i = 0; i < row.children.length; i++) {

    var col = row.children[i];
    col.addEventListener('click', doSomething, false);
}

function doSomething() {
    this.style.backgroundImage ='url("image/'+ number +'.png")';
}


