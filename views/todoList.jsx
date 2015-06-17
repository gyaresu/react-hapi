var React = require('react')
var Todo = require('./todo.jsx')

module.exports = React.createClass({
  displayName: 'TodoList',
  render: function () {
    return (
      <div className='todoList'>
        <table style={{border: '2px solid black'}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    )
  }
})