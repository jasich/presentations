const React = require('react');
const { List } = require('immutable');

const MealPlanSelection = require('./MealPlanSelection');

class MealPlan extends React.Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    const mealSelections = this.props.data;

    let selections = List();
    for (let mt of mealSelections.keys()) {
      let selection = mealSelections.get(mt);
      selections = selections.push(<MealPlanSelection key={mt} reactKey={mt} mealPlan={selection} />);
    }

    return  <div className="meal-plan">
      { selections }
    </div>;
  }
}

module.exports = MealPlan;
