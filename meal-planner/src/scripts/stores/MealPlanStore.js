const React            = require('react');
const { Map }         = require('immutable');
const { EventEmitter } = require('events');

const data = require('json!../data.json');

const AppDispatcher     = require('../AppDispatcher');
const MealPlanConstants = require('../constants/MealPlanConstants');


const CHANGE_EVENT = 'meal-plan-change';

let _mealPlan;

class MealPlanStore extends EventEmitter {
  constructor() {
    _mealPlan = Map();

    for (let mt of data.mealTimes) {
      _mealPlan = _mealPlan.set(mt.name, null);
    }
  }

  getMealPlan() {
    return _mealPlan;
  }

  getSelectedMealOptions() {
    return _mealPlan.values().filter(mp => mp);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const _mealPlanStore = new MealPlanStore();

_mealPlanStore.dispatchToken = AppDispatcher.register(function(action) {
    let change = true;

    switch(action.actionType) {

      case MealPlanConstants.MEAL_PLAN_MEAL_ADDED:
        _mealPlan = _mealPlan.set(action.value.mealTime, action.value.mealOption);
        break;

      case MealPlanConstants.MEAL_PLAN_MEAL_REMOVED:
        _mealPlan = _mealPlan.set(action.value.mealTime, null);
        break;

      default:
        change = false;
        break;
    }

    if(change) {
      _mealPlanStore.emitChange();
    }
});

module.exports = _mealPlanStore;
