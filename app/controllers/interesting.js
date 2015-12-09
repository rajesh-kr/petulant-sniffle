import Ember from 'ember';

export default Ember.Controller.extend({
  pictures: function() {
    let model = this.get('model');
    let c = model.query.results.photo;
    c.forEach(function(item) {
      let url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret;
      let fullImage = url + '_c.jpg';
      let thumbUrl = url + '_t.jpg';
      Ember.set(item, 'url', fullImage);
      Ember.set(item, 'thumbnail', thumbUrl);
    });
    return c;
  }.property('model.query.results.photo.[]')
});
