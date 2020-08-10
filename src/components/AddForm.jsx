import React, {useState} from 'react';

const AddForm = ({addToDo}) => {
    const [content, setContent] = useState('');

    const handleChange = e => {
        setContent(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addToDo({content: content});
        // addToDo({content});
        setContent('');
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" value={content} onChange={handleChange} />
            </form>
        </>
    )
}

export default AddForm;