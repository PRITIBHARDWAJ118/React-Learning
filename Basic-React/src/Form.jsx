function handleFormSubmit(event) {
    console.log("form was submitted");
    event.preventDefault();
}


export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <p>Learning Event Object!!</p>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit!</button>
        </form>
    )
}