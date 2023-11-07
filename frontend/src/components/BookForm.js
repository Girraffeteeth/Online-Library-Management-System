import { useState } from "react";

function BookForm(props)
{
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [id, setID] = useState("");
    const arr = [title, author, genre, id]; // [Jungle Book, Rudyard Kipling, Children's Literature, 1]
    const handleClick = () => {
        props.getState(arr);
    }
    return (
        <div style={{maxWidth: "40%", margin: "0px auto"}}>
            <input onChange={(event)=>setTitle(event.target.value)} class="form-control my-3" placeholder="Enter the Book Title: "></input>
            <input onChange={(event)=>setAuthor(event.target.value)} class="form-control my-3" placeholder="Enter the Book Author: "></input>
            <input onChange={(event)=>setGenre(event.target.value)} class="form-control my-3" placeholder="Enter the Book ID: "></input>
            <input onChange={(event)=>setID(event.target.value)} class="form-control my-3" placeholder="Enter the Book Genre/Domain: "></input>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Submit</button>
        </div>
    )
}

export default BookForm;