const $poligon = document.getElementById('poligon')


var myColors =['white', 'black', 'green', 'red', 'blue']


const gorizont = 16
const vertical = 16


var myListSelecl = ''



myListSelecl += '<select id = "myColorName">'
  

    myColors.forEach((elem) => {
        myListSelecl += `<option  value=${elem}>${elem}</option>`
    })

myListSelecl +='</select>'



myListSelecl += '<label>Clear</label>'
myListSelecl += '<input id="myClear" type="checkbox"/>'




$poligon.innerHTML = myListSelecl


for(var nomLine = 1; nomLine <= vertical; nomLine++) {


    $poligon.insertAdjacentHTML('afterbegin', '<div>')
    
    for(var nomElem = 1; nomElem <= gorizont; nomElem++)
        $poligon.insertAdjacentHTML('afterbegin', '<div class="about"></div>')

    $poligon.insertAdjacentHTML('afterbegin', '</div>')

}






var $myColorPen = document.getElementById('myColorName')
var $myClear = document.getElementById('myClear')

var myColor = $myColorPen.value



//$myClear.onclick(() => {
$myClear.addEventListener('click', () => {

    if($myClear.checked){
        myColor = 'white'
        //$myColorPen.classList.add('hide')
    } else {

        //$myColorPen.classList.remove('hide')
        myColor = $myColorPen.value;
      }
})
$myColorPen.addEventListener('click', () => {
    if(!$myClear.checked)
    myColor = $myColorPen.value
})

$poligon.addEventListener('click', (event) => {

    var myClassName = event.target.className;

    if(myClassName == 'about')
    event.target.style.background = myColor;


})