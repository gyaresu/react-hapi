var React = require('react')
var TodoList = require('./todoList.jsx')
var TodoForm = require('./todoForm.jsx')

// this logs to the server console not browser
// and only once, which is interesting

console.log(TodoList, TodoForm)

var TodoBox = React.createClass({
  displayName: 'todoBox',
  propTypes: {
    age: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    )
  }
})

module.exports = TodoBox