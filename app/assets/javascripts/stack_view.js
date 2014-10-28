console.log("jquery linked");
console.log("modernizr linked");
console.log("card_view.js linked");
console.log("underscore.js linked");

function StackView(model, el){
  console.log('view created with model:', model);

  this.$el   = (el !== undefined) ? $(el) : undefined;
  this.model = model;


}

StackView.prototype = {
  template: _.template($("#stack-template").html()),

  render: function() {
    console.log('  view:render', this);
    var temp = this.template({stack: this.model});
    this.$el = $(temp);

    return this;
  },

  init: function() {
    console.log('  view:init', this);
    var view = this; // make it more semantic below...
    // if the element is NOT on the DOM, ie it was NOT passed
    //   in the constructor
    // debugger
    if (!this.$el) {
      // build the element and then add to the DOM
      view.render();
      $("#list-stacks").append(view.$el);
      console.log('    (building element)', this.$el);
    } else {
      console.log('    (hooking element)', this.$el);
    }

    // attach event listeners, et al
    // view.$el.on("click", "input",       view, view.toggleCompleted);
    // view.$el.on("click", "span.remove", view, view.remove);

    return this; // for chaining!
  },



  remove: function(event) {
    console.log('-> view:remove', event.data);


    event.data.$el.remove();

    // remove from global list!
    delete quickStudyApp.stackViews[event.data.viewId];

    // message the model
    event.data.model.destroy();
  }
};
