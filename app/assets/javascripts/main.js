console.log('main.js linked');
if($ !== undefined) { console.log('  jQuery library loaded!');     }
if(_ !== undefined) { console.log('  Underscore library loaded!'); }


var quickStudyApp       = {}; // create a global namespace
quickStudyApp.stackNum   = 0;
quickStudyApp.stackViews = {}; // this is the global variable to hold our tasks
                        // we hold a reference to our views, bc they in turn
                        // reference our models, via view.model

quickStudyApp.pushView = function(newView) {
  // remember redis? :)
  var viewId = quickStudyApp.stackNum; quickStudyApp.stackNum++; // increment counter
  newView.viewId = viewId; // give that ID to the view, so it can remove itself
  quickStudyApp.stackViews[viewId] = newView; // add our view to the global list of
                                       //   views with a "unique" ID
}

quickStudyApp.createTask = function(data, el) {
  var stack     = new Stack(data);
  var stackView = new StackView(stack, el).init();

  quickStudyApp.pushView(taskView);
  return task; // return the model for chaining!
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

  // caches references to repeatedly need DOM nodes
  quickStudyApp.$body         = $("body");
  quickStudyApp.$inputField   = $("input");
  quickStudyApp.$submitButton = $("button");
  quickStudyApp.$stackList     = $("ul").eq(0);

  // attach a model & view creation function to the form submission
  quickStudyApp.$submitButton.on("click", function(event){
    event.preventDefault();
    var stackDescription = quickStudyApp.$inputField.val();
    quickStudyApp.$inputField.val(''); // reset the input
    quickStudyApp.createStack({ description: stackDescription })
           .create(); // call create on the model that is returned (see above)
  });

  // start the app!
  // quickStudyApp.loadStacks();
  quickStudyApp.$stackList.children().each(function(idx, li){
    var data = {}, $li = $(li);
    data.category = $li.find("span.category").text().trim();
    data.id          = $li.data("id");
    quickStudyApp.createStack(data, li);
  });

  // quickStudyApp.$cardList.children().each(function(idx, li){
  //   var data = {}, $li = $(li);
  //   data.question = $li.find("span.question").text().trim();
  //   data.answer = $li.find("span.answer").text().trim();
  //   data.id          = $li.data("id");
  //   quickStudyApp.createCard(data, li);
  // });
});
