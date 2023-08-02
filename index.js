function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, {text: text, isCompleted: false}];
    setTodos(newTodos); //updates list with new values
  }

  const removeTodo = index => {
    let temp = [...todos]; //catch current list in a variable
    temp.splice(index,1); //remove one item from list at target index
    setTodos(temp); //update state of list with newly spliced list
  }

  return(
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
      <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
