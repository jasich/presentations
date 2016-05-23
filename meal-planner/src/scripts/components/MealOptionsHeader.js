const React = require('react');

const MealOptionsFilter = require('./MealOptionsFilter');

class MealOptionsHeader extends React.Component {
  render() {
    return  <div className="meal-options-header">
              <h1 className="meal-options-header-title">Meal Options</h1>
              <MealOptionsFilter />
            </div>

  }
}

module.exports = MealOptionsHeader;
