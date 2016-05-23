const React            = require('react');
const { List }    = require('immutable');
const { EventEmitter } = require('events');

const data = require('json!../data.json');

const AppDispatcher        = require('../AppDispatcher');
const MealOptionsConstants = require('../constants/MealOptionsConstants');
const MealPlanConstants    = require('../constants/MealPlanConstants');


const CHANGE_EVENT = 'meal-options-change';

const _mealOptions = List(data.mealOptions);
let _availableOptions;
let _lastFilterValue = "";


function filterOptions(filterValue) {
  _lastFilterValue = filterValue || "";

  _availableOptions = List(_mealOptions);

  if (!filterValue || filterValue.trim() === "") {
    return;
  }

  const searchByRegex = new RegExp(filterValue, 'i');

  const byName = _mealOptions.filter(m => {
    return m.name.match(searchByRegex);
  });

  const byTag = _mealOptions
    .filter(m => {
      if (byName.find(x => x === m)) {return false;}

      return m.tags
              .map(tag => { return tag.match(searchByRegex); })
              .reduce((prev, cur) => { return prev || cur; })
    });

  _availableOptions = List(byName).concat(byTag);
}


class MealOptionsStore extends EventEmitter {

  constructor() {
    _availableOptions = List(_mealOptions);
  }

  getAvailableOptions() {
    return _availableOptions;
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

const _mealOptionsStore = new MealOptionsStore();

_mealOptionsStore.dispatchToken = AppDispatcher.register(function(action) {
    let change = true;

    switch(action.actionType) {
      case MealOptionsConstants.MEAL_OPTIONS_FILTER_CHANGED:
        filterOptions(action.value);
        break;

      default:
        change = false;
        break;
    }

    if(change) {
      _mealOptionsStore.emitChange();
    }
});


module.exports = _mealOptionsStore;
