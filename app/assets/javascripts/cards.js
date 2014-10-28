// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log("jquery linked");
console.log("modernizr linked");
console.log("card.js linked");


$(document).ready(function(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/cards"
  }).done(function(data){
    $.each(data, function(idx, card){ var card = new Card(card)});
  })
})

// $(document).ready(function(){

  function Card(data) {
    console.log('card model created', data);
    this.id          = data.id;
    this.completed   = data.completed;
    this.question    = data.question;
    this.answer      = data.answer;
  }

  Card.prototype.toggleCompleted = function(){
  console.log('-> model:toggleCompleted', this);

  this.completed = !this.completed;
  this.update();
}

  Card.prototype.create = function() {
  console.log('!(AJAX) model:create initiated', this);
  $.ajax({
    url:      "/cards",
    type:     "POST",
    dataType: "json",
    context:  this,
    data: {
      task: {
        question:    this.question,
        answer:      this.answer,
        completed:   this.completed
      }
    }
  }).done(function(data){
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
    context:  this,
    data: {
      task: {
        question:    this.question,
        answer:      this.answer,
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
    context:  this
  }).done(function(data){
    console.log('!(AJAX) model:destroy complete', data, this);
  });
}





// });

