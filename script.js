
generateGrid(); //run
onMouseHover(); 



let color;


function generateGrid(){
var n=10;//take grid column value as you want
var count = 0;
var gridContent= '';
for(var i = 0; i < n; i++) {
    gridContent +='<div class="row">';
    for(j = 0; j < n; j++) {
        gridContent+='<div class="gridsquare" tabindex='  + (++count) + '></div>';
    }
    gridContent+="</div>";
}
document.getElementById("gridContent").innerHTML = gridContent; 
}

// function handlekeys(ev){
//   down 40: +n
//   up 38: -n
//   left 29: -1
//   right 37: +1
// }

//queryselector w. event listener for all elements of a class
function onMouseHover(){
document.querySelectorAll('.gridsquare').forEach(item => {
  item.addEventListener('mouseover', event => {
 	  event.target.style.background = color;
       console.log(document.activeElement.tabIndex);

  })
})
    document.getElementById('my-select').addEventListener('change', function() {
    console.log('You selected: ', this.value);
    return color = this.value;
  });

}




