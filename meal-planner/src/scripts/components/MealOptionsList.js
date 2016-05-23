const React = require('react');

const MealOptionsItem = require('./MealOptionsItem');


class MealOptionsList extends React.Component {
  render() {
    if (!this.props.mealOptions) {
      return null;
    }

    return  <div className="meal-options-list">
              {this.props.mealOptions.map(x => <MealOptionsItem key={x.name} data={x} />)}
            </div>;
  }
}

module.exports = MealOptionsList;
