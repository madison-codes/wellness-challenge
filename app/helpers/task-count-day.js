import Ember from 'ember';

export function taskCountDay(params/*, hash*/) {
    let sum = params.reduce((a, b) => {
      return a + b;
    });
    return sum; 
}

export default Ember.Helper.helper(taskCountDay);
