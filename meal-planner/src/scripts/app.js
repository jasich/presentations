require('../styles/app.scss');

const React = require('react');

const MealOptionsStore = require('./stores/MealOptionsStore');
const MealPlanStore = require('./stores/MealPlanStore');

const Header      = require('./components/Header');
const MealPlan    = require('./components/MealPlan');
const MealOptions = require('./components/MealOptions');

function getMealPlannerState() {
  return {
    mealPlan    : MealPlanStore.getMealPlan(),
    mealOptions : MealOptionsStore.getAvailableOptions()
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = getMealPlannerState();
  }

  render() {
    return  <div className="main">
              <Header title={this.props.title} />
              <MealPlan data={this.state.mealPlan} />
              <MealOptions mealOptions={this.state.mealOptions} />
            </div>;
  }

  componentWillMount() {
    MealOptionsStore.addChangeListener(this._onChange.bind(this));
    MealPlanStore.addChangeListener(this._onChange.bind(this));
  }

  componentDidMount() {
  }

  _onChange() {
    this.setState(getMealPlannerState());
  }
}

React.render(<App title="Meal Planner Extreme" />, document.body);
