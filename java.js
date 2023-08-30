let canvas = document.getElementById("canvas")
let color = document.getElementById("putcolor")
let subtract = document.getElementById("subtract")
let addition = document.getElementById("add")
let number = document.getElementById("inbuit-value")
let clean = document.getElementById("clear")

//getcontext(2d) is basically an object which will gonna provide us some keys through which we can manipualte the content of the rendered content of the page
let getcontextvalue = canvas.getContext('2d')
let mousepressed = false
let x,y;
let radius = 10
let selectedcolor = "#000000"

console.log(getcontextvalue)
canvas.addEventListener("mousedown", function keepingtrackdown(e){
    //this event of mousedown runs only ones when we click on the  mouse and when we loose the mousedown 
    //mainly two times only
    mousepressed = true
    let {offsetX, offsetY} = e
    x = offsetX
    y = offsetY
})

document.addEventListener("mouseup", function keepmouseup(){
    mousepressed = false

    x = undefined
    y = undefined
})


// this is an event that keeps track of our cursor position while moving it around the screen
canvas.addEventListener("mousemove",function keepingtrackmove(e){
    let {offsetX, offsetY} = e
    if(mousepressed){
        let xposition = offsetX
        let yposition = offsetY

        drawingcircle(xposition,yposition)
        drawinglines(x,y,xposition,yposition)

        x = xposition
        y = yposition
    }
})

//lets build a function in the name of cicle which will gonna help us in the making of circle on the canvas of the html

function drawingcircle(x,y){
    //begin path is important to start new shapes and its simple of current time function of the audio which we use to start the audio from the starting 
    getcontextvalue.beginPath()
    //arc is a method, which is responsible in making of a circle
    getcontextvalue.arc(x,y,radius,0,Math.PI * 2 )
    //fill and fillstyle are not javascript function, instead they are key value pairs of the getcontext(2d) object 
    getcontextvalue.fillStyle = selectedcolor
    getcontextvalue.fill()  
}

function drawinglines(x,y,x2,y2){
    getcontextvalue.beginPath()
    //moveto function is resposible to set the starting point of the pen from where we wil gonna start our drawing
    getcontextvalue.moveTo(x,y)
    //function lineto is responsible to proced the line further where we want to take it 
    getcontextvalue.lineTo(x2,y2)
    // here multiple 2 is essential because radius is the half size of the circle
    getcontextvalue.lineWidth = radius * 2
    getcontextvalue.strokeStyle = selectedcolor
    getcontextvalue.stroke()
}

color.addEventListener("change",function(e){
    selectedcolor = e.target.value
})

addition.addEventListener("click",function(){
    radius++;
    number.innerHTML = radius
})

subtract.addEventListener("click",function(){
    radius--
    number.innerHTML = radius
})

clean.addEventListener("click",function(){
    //clear rect is resposible to clearn entire canvas
    getcontextvalue.clearRect(0, 0, canvas.width, canvas.height);
})