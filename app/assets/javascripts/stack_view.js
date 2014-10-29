console.log('stack_view.js linked');

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

    if (!this.$el) {
      // build the element and then add to the DOM
      view.render();
      $("#list-stacks").append(view.$el);
      console.log('    (building element)', this.$el);
    } else {
      console.log('    (hooking element)', this.$el);
    }

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
