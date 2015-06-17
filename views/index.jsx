var React = require('react')

var Hi = React.createClass({
  displayName: 'Hi',
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return <div>Hello {this.props.name}</div>
  }
})

module.exports = Hi