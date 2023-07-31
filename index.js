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

  return(
    <>
      {todos.map((todo, i) => 
        <div className="todo" key={i}>{todo.text}</div>)}
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
