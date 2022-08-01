
generateGrid(); //run
onMouseHover(); 

function generateGrid(){
var n=10;//take grid column value as you want
var count = 0;
var gridContent= '';

for(var i = 0; i < n; i++) {
    gridContent +='<div class="row">';
    for(j = 0; j < n; j++) {
        gridContent+='<div class="gridsquare" id='  + (++count) + '></div>';
    }
    gridContent+="</div>";
}
document.getElementById("gridContent").innerHTML = gridContent; 
}


//queryselector w. event listener for all elements of a class
function onMouseHover(){
document.querySelectorAll('.gridsquare').forEach(item => {
  item.addEventListener('mouseover', event => {
 	  event.target.style.background = "black";
  })
})
}




