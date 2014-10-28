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
    this.$el = $(temp);

    return this;
  },

  init: function() {
    console.log('  view:init', this);
    var view = this;
    // debugger

    if (!this.$el) {
      // build the element and then add to the DOM
      view.render();
      $("#cards").append(view.$el);
      console.log('    (building element)', this.$el);
    } else {
      console.log('    (hooking element)', this.$el);
    }

    // attach event listeners, et al

    view.$el.on("click", "span.remove", view, view.remove);

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



