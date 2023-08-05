import React,{ useState }  from 'react';
import'./Todo.scss';

function CreateArea({add}) {
    const [note, setNote] = useState({
      title: "",
      content: ""
    });
    function handleChange(event) {
      const { name, value } = event.target;
      setNote((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }
    function handleSubmit(event) {
        add(note);
        setNote({
          title:"",
          content:""
        })
        event.preventDefault();
    }
    return (
      <div>
        <form  className='addTodo'>
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={note.content}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
    );
  }

export default CreateArea