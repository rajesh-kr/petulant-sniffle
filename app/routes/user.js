import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.people.publicphotos%20where%20user_id%3D%22${params.user_id}%22%20and%20api_key%3D%22<flickr_api_key>%22%3B&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
  }
});
