import Ember from 'ember';

export default Ember.Controller.extend({
  sassVariables: Ember.A([
    ["$navbar-height",            "code:50px", "Determines the navbar's height"],
    ["$navbar-link-line-height",  "code:$navbar-height", "Determines the navbar's height"],
    ["$navbar-link-padding",      "code:0 8px", "Determines the navbar's height"],
    ["$navbar-title-font-weight", "code:400", "Determines the navbar's height"],
    ["$navbar-title-font-size",   "code:13px", "Determines the navbar's height"],
    ["$navbar-title-padding",     "code:0 8px 0 0", "Determines the navbar's height"],
    ["$navbar-breapoint",         "code:$breapoint-md", "Determines the navbar's height"],
  ]),
});
