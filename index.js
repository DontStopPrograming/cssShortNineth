let dots = [],
 mouse = {
  x: 0,
  y: 0
 }

 function Dot(){
    x = 0,
    y = 0
    node = (function(){
      let n = document.createElement("div")
      n.class = "trail"
      document.body.appendChild(n)
      return n
    })
 }

 Dot.prototype.draw = function() {
  node.style.left = x + "px"
  node.style.top = y + "px"
 }

 for (let i = 0; i < 12; i++){
  let d = new Dot()
  dots.push(d)
 }