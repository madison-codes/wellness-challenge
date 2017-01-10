import Ember from 'ember';

export default Ember.Component.extend({
  model(){
    return this.route.get('model');
  },
  actions: {
  sum(){
    const rest = Ember.computed.sum('model.rest');
    const sweat = Ember.computed.sum('model.sweat');

    return rest + sweat;
    // sum(model) {
    //   let count = 0;
    //   for(var i = 0; i < model.length; i++){
    //     let sum = model.reduce((a, b) => {
    //       return a + b;
    //     });
    //     count =  count + sum;
    //   }
    //   return count;
    }
  }
});
//
// export function taskCountTotal(model) {
//   let count = 0;
//   let sum = params.reduce((a, b) => {
//     return a + b;
//   });
//   count =  count + sum;
//   return count;
// }
