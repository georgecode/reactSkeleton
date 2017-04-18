var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      // <h1>Hello React</h1>
      <div className="helloContainer">
          <h1 className="hello">Hello React</h1>
          <h2>TWO plus TWO equals {2+2}</h2>
      </div>
    )
  }
});