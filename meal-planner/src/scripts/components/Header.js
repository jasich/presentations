const React = require('react');

class Header extends React.Component {

  render() {
    return  <div className="header">
              <h1 className="header-title">{this.props.title}</h1>
            </div>
  }
}

module.exports = Header;
