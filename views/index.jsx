var React = require('react')

var todoBox = React.createClass({
  displayName: 'todoBox',
  propTypes: {
    age: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className="todoBox">
        Hello, world!
      </div>
    )
  }
})

module.exports = todoBox