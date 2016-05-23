const React = require('react');

const MealOptionsActionsCreator = require('../actions/MealOptionsActionsCreator');

class MealOptionsFilter extends React.Component {
  render() {
    return <input className="meal-options-header-filter-input" onChange={this._onChange} type="text" placeholder="filter meal options"/>;
  }

  _onChange(event) {
    MealOptionsActionsCreator.mealOptionsFilterChanged(event.target.value);
  }
}

module.exports = MealOptionsFilter;
