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

    setTimeout(function() {
    showCard();

    }, 200);
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
    $(quickStudyApp.$cardBacks[quickStudyApp.cardNum - 1]).addClass('hidden');
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

  quickStudyApp.pushView(stackView);
  return stack; // return the model for chaining!
};

quickStudyApp.createCard = function(data, el) {
  var card     = new Card(data);
  // debugger
  var cardView = new CardView(card, el).init();

  quickStudyApp.pushViewC(cardView);
  return card; // return the model for chaining!
};


console.log("1. application initialized...", quickStudyApp);

function pageLoad(){
  console.log('2. page (DOM) loaded: now running onload...');

  // quickStudyApp.$body         = $("body");

  $('body').on("click", '.sample', flip);
  $('body').on("click", '.sample', switchCard);

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

}
$(document).ready(pageLoad); // document.ready
