function TodoForm({addTodo}) {
    const [value, setValues] = React.useState(''); //creates a variable to hold the form submission info

    const handleSubmit = e => {
        e.preventDefault(); //prevent automatic page reload
        if (!value) return; //do nothing if form is blank
        addTodo(value);
        setValues(''); //reset form
      } // function to handle form info submission
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type= "text"
            className= "input"
            value= {value}
            placeholder= "Add ToDo..."
            onChange= {e => setValues(e.target.value)} //function to catch form submission data into our variable
            />  
        </form>
    );
}