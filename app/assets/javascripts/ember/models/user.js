App.User = DS.Model.extend({
  name:  DS.attr('string'),
  email: DS.attr('string'),
  age:   DS.attr('number')
});
