import "./Button.css";
function printHello(event){
    console.log("hello! button clicked");
    console.log(event);
   
}
function printhii(){
    console.log("hii! button hovered");
}


export default function  Button() {
    return(
        <div>
            <button className="btn" onClick={printHello}>Handling click events</button>
            <button onDoubleClick={()=>{console.log("double clicked")}}>Handling double click events</button>
            <p onMouseOver={printhii}>Hover over me!(Handling mouse over event)</p>
        </div>
    );
}