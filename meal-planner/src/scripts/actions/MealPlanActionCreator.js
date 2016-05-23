const MealPlanConstants = require('../constants/MealPlanConstants');
const AppDispatcher     = require('../AppDispatcher');


class MealPlanActionCreator {
  mealPlanSet(mealTime, mealOption) {
    AppDispatcher.dispatch({
      actionType: MealPlanConstants.MEAL_PLAN_MEAL_ADDED,
      value: {mealTime, mealOption}
    });
  }

  mealPlanDelete(mealTime, mealOption) {
    AppDispatcher.dispatch({
      actionType: MealPlanConstants.MEAL_PLAN_MEAL_REMOVED,
      value: {mealTime, mealOption}
    });
  }
}


module.exports = new MealPlanActionCreator();
