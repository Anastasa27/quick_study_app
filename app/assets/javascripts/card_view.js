console.log("jquery linked");
console.log("modernizr linked");
console.log("card_view.js linked");
console.log("underscore.js linked");

// $(document).ready(function(){
  function CardView(model, el){
  console.log('view created with model:', model);

  this.$el   = (el !== undefined) ? $(el) : undefined;
  this.model = model;


}

CardView.prototype = {
  template: _.template($("#card-template").html()),


  render: function() {
    console.log('  view:render', this);
    var temp = this.template({card: this.model});
    this.$el = $(temp); // reset el

    return this; // for chaining!
  },

  init: function() {
    console.log('  view:init', this);
    var view = this; // make it more semantic below...
    // debugger
    // if the element is NOT on the DOM, ie it was NOT passed
    //   in the constructor
    if (!this.$el) {
      // build the element and then add to the DOM
      view.render();
      $("#cards").append(view.$el);
      console.log('    (building element)', this.$el);
    } else {
      console.log('    (hooking element)', this.$el);
    }

    // attach event listeners, et al
    view.$el.on("click", "input",       view, view.toggleCompleted);
    view.$el.on("click", "span.remove", view, view.remove);

    return this; // for chaining!
  },

  toggleCompleted: function(event) {
    console.log('-> view:toggleCompleted', event.data);

    // this is the DOM node
    // event.data refers to the view instance (set in the handler above)
    event.data.$el.find("span.description").toggleClass('completed');

    // message the model
    event.data.model.toggleCompleted();
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



