// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log("jquery linked");
console.log("modernizr linked");
console.log("card.js linked");


$(document).ready(function(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/stacks"
  }).done(function(data){
    $.each(data, function(idx, item){
      var stack = new Stack(item);
      var sView = new StackView(stack);
      sView.init();
    });
  })
})


function Stack(data) {
  console.log('card model created', data);
  this.id          = data.id;
  this.category    = data.category;
}

Stack.prototype.create = function() {
  console.log('!(AJAX) model:create initiated', this);
  $.ajax({
    url:      "/stacks",
    type:     "POST",
    dataType: "json",
    context:  this,
    data: {
      task: {
        category:    this.category,
      }
    }
  }).done(function(data){
    this.id        = data.id;
    console.log('!(AJAX) model:create complete', data, this);
  });
}

Stack.prototype.update = function() {
  console.log('!(AJAX) model:update initiated');
  $.ajax({
    url:      "/stacks/" + this.id,
    type:     "PATCH",
    dataType: "json",
    context:  this,
    data: {
      task: {
        category:    this.category,
      }
    }
  }).done(function(data){
    console.log('!(AJAX) model:update complete', data, this);
  });
}

Stack.prototype.destroy = function(){
  console.log('!(AJAX) model:destroy initiated');
  $.ajax({
    url:      "/stacks/" + this.id,
    type:     "DELETE",
    dataType: "json",
    context:  this
  }).done(function(data){
    console.log('!(AJAX) model:destroy complete', data, this);
  });
}
