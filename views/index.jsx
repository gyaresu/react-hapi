var React = require('react')

var Hi = React.createClass({
  displayName: 'Hi',
  propTypes: {
    age: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div>
        Hello {this.props.name} <br />
        Your age is {this.props.age} and your colour is {this.props.color}
      </div>
    )
  }
})

module.exports = Hi