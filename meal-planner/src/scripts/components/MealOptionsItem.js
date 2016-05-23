const React             = require('react');
const { DragDropMixin } = require('react-dnd');

const MealOptionsConstants  = require('../constants/MealOptionsConstants');

const MealOptionsItem = React.createClass({
  mixins: [DragDropMixin],

  statics: {
    configureDragDrop(register) {
      register(MealOptionsConstants.MEAL_OPTIONS_MEAL_TYPE, {
        dragSource: {
          beginDrag(component) {
            return {
              item: {
                mealOption: component.props.data
              }
            };
          }
        }
      });
    }
  },

  render() {
    var { isDragging } = this.getDragState(MealOptionsConstants.MEAL_OPTIONS_MEAL_TYPE);

    return  <div {...this.dragSourceFor(MealOptionsConstants.MEAL_OPTIONS_MEAL_TYPE)}
              className="meal-options-item-container">
              <div className="meal-options-item">
                <img src={this.props.data.picUrl} />
                <div className="meal-options-item-details">
                  <div>
                    <a className="meal-options-item-details-title" target="_blank" href={this.props.data.url}>
                      {this.props.data.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>;
  }
});

module.exports = MealOptionsItem;
