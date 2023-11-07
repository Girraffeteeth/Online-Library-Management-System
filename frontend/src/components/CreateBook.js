import BookForm from "./BookForm";

function CreateBook()
{
    const [arr, setArr] = useState([]); // arr=[Jungle Book, Rudyard Kipling, Children's Literature, 1]
    const getState = (childData) => { // childData=[Jungle Book, Rudyard Kipling, Children's Literature, 1]
        setArr (childData);
    } 
    return (
        <form>
            <BookForm getState={getState}>
            
            </BookForm>
        </form>
    )
}

export default CreateBook;