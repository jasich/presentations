const React = require('react');

const MealOptionsHeader = require('./MealOptionsHeader');
const MealOptionsList = require('./MealOptionsList');


class MealOptions extends React.Component {
  render() {
    return  <div className="meal-options">
              <MealOptionsHeader />
              <MealOptionsList mealOptions={this.props.mealOptions} />
            </div>;
  }
}

module.exports = MealOptions;
