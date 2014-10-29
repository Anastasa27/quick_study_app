console.log('main.js linked');
if($ !== undefined) { console.log('  jQuery library loaded!');     }
if(_ !== undefined) { console.log('  Underscore library loaded!'); }

var cards;
var quickStudyApp        = {};
quickStudyApp.stackNum   = 0;
quickStudyApp.stackViews = {};
quickStudyApp.cardViews  = {};
quickStudyApp.cardNum    = 0;
quickStudyApp.showing    = 'front';

function flip() {
  if ($('.card').hasClass("flipped")) {
    $('.card').css("transform", "rotateY(0deg)").toggleClass("flipped");
  } else {
    $('.card').css("transform", "rotateY(180deg)").addClass("flipped");
  }
}

function switchCard() {
  if (quickStudyApp.showing == 'back') {
    if (quickStudyApp.cardNum < quickStudyApp.totalCards - 0) {
      quickStudyApp.cardNum++;
    } else {
      quickStudyApp.cardNum = 0;
    }
    showCard();
    quickStudyApp.showing = 'front';
  } else {
    quickStudyApp.showing = 'back';
  }
}

function showCard(first) {
  // debugger
  $(quickStudyApp.$cardFronts[quickStudyApp.cardNum]).removeClass('hidden');
  $(quickStudyApp.$cardBacks[quickStudyApp.cardNum]).removeClass('hidden');

  if (!first) {
    $(quickStudyApp.$cardFronts[quickStudyApp.cardNum - 1]).addClass('hidden');
    $(quickStudyApp.$cardBacks[quickStudyApp.cardNum - 1]).addClass('hidden').delay( 800 );
  }
}


quickStudyApp.pushView = function(newView) {

  var viewId = quickStudyApp.stackNum; quickStudyApp.stackNum++; // increment counter
  newView.viewId = viewId; // give that ID to the view, so it can remove itself
  quickStudyApp.stackViews[viewId] = newView; // add our view to the global list of
                                       //   views with a "unique" ID

};

quickStudyApp.pushViewC = function(newView) {

  var viewIdC = quickStudyApp.cardNum; quickStudyApp.cardNum++; // increment counter
  newViewC.viewIdC = viewIdC; // give that ID to the view, so it can remove itself
  quickStudyApp.cardViews[viewIdC] = newViewC; // add our view to the global list of
                                       //   views with a "unique" ID

};


quickStudyApp.createStack = function(data, el) {
  var stack     = new Stack(data);
  var stackView = new StackView(stack, el).init();


   // $('#list-stacks').append(stackView.$el);

  quickStudyApp.pushView(stackView);
  return stack; // return the model for chaining!
};

quickStudyApp.createCard = function(data, el) {
  var card     = new Card(data);
  // debugger
  var cardView = new CardView(card, el).init();

 // $('#flashcard-front').append(cardView.$el);



  quickStudyApp.pushViewC(cardView);
  return card; // return the model for chaining!
};

// NOT doing the below b/c we are loading the page WITH the
//   current state of the DB!
// quickStudyApp.loadStacks = function() {
//   // INDEX: GET /stack
//   $.ajax({
//     url: "/stack",
//     format: "json"
//   }).done(function(data){
//     // create a local stack (stack model, view and pushed on to the stack list)
//     for(var i = 0; i < data.length; i++){
//       quickStudyApp.createStack(data[i]);
//     }
//   });
// }

console.log("1. application initialized...", quickStudyApp);

$(function(){
  console.log('2. page (DOM) loaded: now running onload...');

  quickStudyApp.$body         = $("body");
  // quickStudyApp.$inputField   = $("input");
  // quickStudyApp.$submitButton = $("button");
  // quickStudyApp.$stackList     = $("ul").eq(0);

  // attach a model & view creation function to the form submission
  // quickStudyApp.$submitButton.on("click", function(event){
    // event.preventDefault();
  // var stackDescription = quickStudyApp.$inputField.val();
  // quickStudyApp.$inputField.val(''); // reset the input
  // quickStudyApp.createStack({ description: stackDescription });
  //          // .create(); // call create on the model that is returned (see above)
  $('.sample').on("click", flip);
  $('.sample').on("click", switchCard);

  cards = [];

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/cards"
  }).done(function(data){
    quickStudyApp.totalCards = data.length;
    $.each(data, function(idx, item){
      var card = new Card(item);
      var cView = new CardView(card);
      cView.init();
      cards.push(data);
    });
    // now that they are on the DOM, cache a reference to them
    quickStudyApp.$cardFronts = $('.card-front-text');
    quickStudyApp.$cardBacks  = $('.card-back-text');
    showCard(true);
  });

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
  });

}); // document.ready
