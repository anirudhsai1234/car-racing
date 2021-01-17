class Form{
constructor(){}

display(){
    var title=createElement('h2')
    title.html("CAR RACING")
    title.position(250,50);
   var input=createInput("name")
   input.position(250,250)
   var button=createButton("play")
   button.position(250,300)
   var greeting=createElement('h3')
   button.mousePressed(function(){
       input.hide()
       button.hide()
       var name=input.value()
       playerCount+=1;
       player.update(name)
       player.updateCount(playerCount)
       greeting.html("hola"+name)
       greeting.position(200,200);
   })
}
}