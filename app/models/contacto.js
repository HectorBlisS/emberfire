import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  equipo: DS.attr('string'),
  tipo: DS.attr('string'),
  nivel: DS.attr('number')
});
