import React, {CreateContext,useState} from "react";
import Home from"./Home";
export Const Cont = CreateContext(null);
function App(){
    Const [Countunter,setCounter] = useState(0);
    function handleClick(){
        setCounter(counter + 1);

    }
    return(
        <>
        <cont.Provider value={{counter,handleClick}}>
            <Home/>
        </cont.Provider>
        </>
    );
}
export default App;