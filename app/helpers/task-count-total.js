import Ember from 'ember';

let count = 0;
export function taskCountTotal(params) {
  let sum = params.reduce((a, b) => {
    return a + b;
  });
  count =  count + sum;
  return count;
}
export default Ember.Helper.helper(taskCountTotal);
