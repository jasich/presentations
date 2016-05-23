const React = require('react');
const { DragDropMixin } = require('react-dnd');

const MealOptionsConstants  = require('../constants/MealOptionsConstants');
const MealPlanActionCreator = require('../actions/MealPlanActionCreator');

var MealPlanSelection = React.createClass({

  mixins: [DragDropMixin],

 statics: {
   configureDragDrop(register) {
     register(MealOptionsConstants.MEAL_OPTIONS_MEAL_TYPE, {
       dropTarget: {
         acceptDrop(component, item) {
           MealPlanActionCreator.mealPlanSet(component.props.reactKey, item.mealOption);
         }
       }
     });
   }
 },

  render() {
    let inner;
    if (this.props.mealPlan) {
      inner = <img className="meal-plan-selection-image" title="click to remove" src={this.props.mealPlan.picUrl} onClick={this._onRemove} />;
    } else {
      inner = <span className="meal-plan-selection-action-text">drag here</span>;
    }

    var dropState = this.getDropState(MealOptionsConstants.MEAL_OPTIONS_MEAL_TYPE);
    if (dropState.isHovering) {
      console.log('such hovering');
    }

    var outerClasses = "meal-plan-selection-outer";
    outerClasses += dropState.isHovering ? ' hovering' : '';
    outerClasses += this.props.mealPlan ? ' removal' : '';

    return <div {...this.dropTargetFor(MealOptionsConstants.MEAL_OPTIONS_MEAL_TYPE)}
              className='meal-plan-selection'>

            <div className={outerClasses}>
              <div className="meal-plan-selection-inner">
                {inner}
              </div>
            </div>

            <div>
              <span className="meal-plan-selection-text">
                {this.props.reactKey}
              </span>
            </div>

            <div>
              <span className="meal-plan-selection-name">
                {this.props.mealPlan && this.props.mealPlan.name}
              </span>
            </div>

          </div>;
  },

  _onRemove() {
    MealPlanActionCreator.mealPlanDelete(this.props.reactKey, this.props.mealPlan);
  }
});

module.exports = MealPlanSelection;
