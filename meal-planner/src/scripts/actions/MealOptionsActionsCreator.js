const MealOptionsConstants = require('../constants/MealOptionsConstants');
const AppDispatcher        = require('../AppDispatcher');


class MealOptionsActionsCreator {
  mealOptionsFilterChanged(value) {
    AppDispatcher.dispatch({
      actionType: MealOptionsConstants.MEAL_OPTIONS_FILTER_CHANGED,
      value: value
    });
  }
}


module.exports = new MealOptionsActionsCreator();
