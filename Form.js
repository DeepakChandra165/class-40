class Form {

  constructor() {
    //creating components for form
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');

  }
  //hiding the form
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
 //displaying the game
  display(){
    //adding title
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    //hiding input and buttonwhen clicked on mouse
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      //updating the playercount
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
 // welcoming player
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    //adding reset button
this.reset.mousePressed(()=> {
  player.updateCount(0);
  game.update(0);

})
  }
}
