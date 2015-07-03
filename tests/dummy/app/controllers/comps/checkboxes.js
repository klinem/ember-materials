import Ember from 'ember';

export default Ember.Controller.extend({
  checkboxAttributes: Ember.A([
    ["value",    "code:Boolean", "code:false", ""],
    ["disabled", "code:Boolean", "code:false", ""],
    ["label",    "code:String",  "code:null", ""],
    ["tabindex", "code:Number",  "code:0", "Controls the element's tabindex attribute. If the element is disabled this will automatically set to -1"],
    ["label",    "code:String",  "code:null", ""],
  ])
});
