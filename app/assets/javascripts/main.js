console.log('main.js linked');
if($ !== undefined) { console.log('  jQuery library loaded!');     }
if(_ !== undefined) { console.log('  Underscore library loaded!'); }


var quickStudyApp       = {};
quickStudyApp.stackNum   = 0;
quickStudyApp.stackViews = {};
quickStudyApp.cardViews = {};
quickStudyApp.cardNum = 0;

quickStudyApp.pushView = function(newView) {

  var viewId = quickStudyApp.stackNum; quickStudyApp.stackNum++; // increment counter
  newView.viewId = viewId; // give that ID to the view, so it can remove itself
  quickStudyApp.stackViews[viewId] = newView; // add our view to the global list of
                                       //   views with a "unique" ID

}

quickStudyApp.pushViewC = function(newView) {

  var viewIdC = quickStudyApp.cardNum; quickStudyApp.cardNum++; // increment counter
  newViewC.viewIdC = viewIdC; // give that ID to the view, so it can remove itself
  quickStudyApp.cardViews[viewIdC] = newViewC; // add our view to the global list of
                                       //   views with a "unique" ID

}


quickStudyApp.createStack = function(data, el) {
  var stack     = new Stack(data);
  var stackView = new StackView(stack, el).init();


   $('#list-stacks').append(stackView.$el);

  quickStudyApp.pushView(stackView);
  return stack; // return the model for chaining!
}

quickStudyApp.createCard = function(data, el) {
  var card     = new Card(data);
  var cardView = new CardView(card, el).init();

 $('#flashcard-front').append(cardView.$el);



  quickStudyApp.pushViewC(cardView);
  return card; // return the model for chaining!
}

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
  quickStudyApp.$inputField   = $("input");
  quickStudyApp.$submitButton = $("button");
  // quickStudyApp.$stackList     = $("ul").eq(0);

  // attach a model & view creation function to the form submission
  // quickStudyApp.$submitButton.on("click", function(event){
    // event.preventDefault();
    var stackDescription = quickStudyApp.$inputField.val();
    quickStudyApp.$inputField.val(''); // reset the input
    quickStudyApp.createStack({ description: stackDescription })
           .create(); // call create on the model that is returned (see above)
  });

   // var cardDescription = quickStudyApp.$inputField.val();
   //  quickStudyApp.$inputField.val(''); // reset the input
   //  quickStudyApp.createCard({ description: cardDescription })
   //         .create(); // call create on the model that is returned (see above)
  // });
  // start the app!
   // quickStudyApp.loadStacks();
  // quickStudyApp.$stackList.children().each(function(idx, li){
  //   var data = {}, $li = $(li);
  //   data.category = $li.find("span.category").text().trim();
  //   data.id          = $li.data("id");
  //   quickStudyApp.createStack(data, li);
  // });

  // quickStudyApp.$cardList.children().each(function(idx, li){
  //   var data = {}, $li = $(li);
  //   data.question = $li.find("span.question").text().trim();
  //   data.answer = $li.find("span.answer").text().trim();
  //   data.id          = $li.data("id");
  //   quickStudyApp.createCard(data, li);
  // });
