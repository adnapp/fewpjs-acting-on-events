document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();


  // ADD CODE HERE!
  const movesUl = document.querySelector('#moves-container')

  document.addEventListener("keydown", function(e) {
    const moveLi = document.createElement('li')
    moveLi.dataset.id = "movesList" // setting datatype -- line 38
    if (e.key === "ArrowLeft"){
      moveLi.textContent = "left"
      movesUl.append(moveLi)
    } if (e.key === "ArrowRight"){
      moveLi.textContent = "right"  
      movesUl.append(moveLi)
    } if (e.key === "ArrowUp"){
      moveLi.textContent = "up"
      movesUl.append(moveLi)
    } if (e.key === "ArrowDown"){
      moveLi.textContent = "down"
      movesUl.append(moveLi)
    } 
    
  })

  
  const moveButton = document.querySelector("#move-button")

  moveButton.addEventListener("click", function(event){
    const arrowMoves = movesUl.firstElementChild.textContent
    move(arrowMoves)
    movesUl.firstElementChild.remove()
  })

  movesUl.addEventListener("click", function(event){
    if (event.target.dataset.id === "movesList") {
      console.log("movesList")
  
      event.target.remove()
    }
  })
});
