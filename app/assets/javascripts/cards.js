// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log("jquery linked");
console.log("modernizr linked");
console.log("card.js linked");

$(document).ready(function(){

  function Card(data) {
    console.log('card model created', data);
    this.id          = data.id;
    this.completed   = data.completed;
    this.question    = data.question;
    this.answer      = data.answer;
  }

  Card.prototype.toggleCompleted = function(){
  console.log('-> model:toggleCompleted', this);

  this.completed = !this.completed; // update model!
  this.update(); // persist!
}

  Card.prototype.create = function() {
  console.log('!(AJAX) model:create initiated', this);
  $.ajax({
    url:      "/cards",
    type:     "POST",
    dataType: "json",
    context:  this, // this sets context in done to the object
    data: {
      task: { // nested for rails strong params (white-listing)!
        question: this.question,
        answer: this.answer,
        completed:   this.completed
      }
    }
  }).done(function(data){
    // give the model the data from the server (id, etc.)
    this.id        = data.id;
    this.completed = data.completed;
    console.log('!(AJAX) model:create complete', data, this);
  });
}

Card.prototype.update = function() {
  console.log('!(AJAX) model:update initiated');
  $.ajax({
    url:      "/cards/" + this.id,
    type:     "PATCH",
    dataType: "json",
    context:  this, // this sets context in done to the object
    data: {
      task: { // nested for rails strong params (white-listing)!
        question: this.question,
        answer: this.answer,
        completed:   this.completed
      }
    }
  }).done(function(data){
    console.log('!(AJAX) model:update complete', data, this);
  });
}

Card.prototype.destroy = function(){
  console.log('!(AJAX) model:destroy initiated');
  $.ajax({
    url:      "/cards/" + this.id,
    type:     "DELETE",
    dataType: "json",
    context:  this // this sets context in done to the object
  }).done(function(data){
    console.log('!(AJAX) model:destroy complete', data, this);
  });
}



});

