var React = require('react')

module.exports = React.createClass({
  displayName: 'Todo',
  propTypes: {
    children: React.propType,
    title: React.propType
  },
  render: function () {
    return (
      <tr>
        <td style={{border: '1px solid black'}}>{this.props.title}</td>
        <td style={{border: '1px solid black'}}>{this.props.children}</td>
      </tr>
    )
  }
})