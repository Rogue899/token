const Home = () => {
    const handleClick = (e) =>{
        console.log("hello world" , e);
    }
    const handleClickAgain = (name) =>{
        console.log("hello " + name)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=> handleClickAgain('mario')}>Click me</button>

        </div>
     );
}
 
export default Home ;