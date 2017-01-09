import Ember from 'ember';

export function taskCountTotal(params/*, hash*/) {

  var sum = params.reduce((a, b) => {
    return a + b;
  });
  return sum;
}

export default Ember.Helper.helper(taskCountTotal);
// 
// App:
//   User:
//     Admin: true/ false
//     Name:
//     Data: ["date": {
//       Rest: 1
//       Sweat: 0
//
//     }]
//
//     Data: {
//       Rest: [34523465, 24563456245, 245634574567, 24573457, 34573452456],
//
//     }
//
//     data.rest.includes(2324624573457);
