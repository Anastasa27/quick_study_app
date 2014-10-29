console.log("card_view.js linked");

// $(document).ready(function(){
function CardView(model, el){
  console.log('view created with model:', model);

  this.$el   = (el !== undefined) ? $(el) : undefined;
  this.model = model;


}

CardView.prototype = {
  frontTemplate: _.template($("#card-front-template").html()),
  backTemplate:  _.template($("#card-back-template").html()),


  render: function() {
    console.log('  view:render', this);
    var front = this.frontTemplate({card: this.model});
    var back  = this.backTemplate( {card: this.model});

    // debugger

    this.$el.find(".flashcard-front").append(front);
    this.$el.find(".flashcard-back").append(back);

    return this;
  },

  init: function() {
    console.log('  view:init', this);
    var view = this;
    // debugger

    if (!this.$el) {
      this.$el = $("#flashcard");
      // build the element and then add to the DOM
      view.render();

      console.log('    (building element)', this.$el);
    } else {
      console.log('    (hooking element)', this.$el);
    }

    return this; // for chaining!
  },



  remove: function(event) {
    console.log('-> view:remove', event.data);

    // remove from the DOM
    event.data.$el.remove();

    // remove from global list!
    // http://stackoverflow.com/questions/208105/how-to-remove-a-property-from-a-javascript-object
    delete quickStudyApp.cardViews[event.data.viewId];

    // message the model
    event.data.model.destroy();
  }
};

// });



