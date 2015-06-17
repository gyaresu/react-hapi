var React = require('react')

var Hi = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>
  }
})

module.exports = Hi