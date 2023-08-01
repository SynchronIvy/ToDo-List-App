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
  const [value, setValues] = React.useState(''); //creates a variable to hold the form submission info
  const handleSubmit = e => {
    e.preventDefault(); //prevent automatic page reload
    if (!value) return; //do nothing if form is blank
    const newTodos = [...todos, {text: value, isCompleted: false}];
    setTodos(newTodos); //updates list with new values
    setValues(''); //reset form
  } // function to handle form info submission

  const removeTodo = e => {
    const index = Number(e.target.id);
    //convert id index to a number from a string and catch in a variable
    const temp = [...todos]; //catch current list in a variable
    temp.splice(index,1); //remove one item from list at target index
    setTodos(temp); //update state of list with newly spliced list
  }

  return(
    <>
      {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
    <form onSubmit={handleSubmit}>
      <input 
      type= "text"
      className= "input"
      value= {value}
      placeholder= "Add ToDo..."
      onChange= {e => setValues(e.target.value)} //function to catch form submission data into our variable
    />  
    </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
