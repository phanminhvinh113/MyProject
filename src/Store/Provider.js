import Context from "./Context";
import { useReducer } from "react";
import reducer, { initState } from "./Reducer";
import Logger from "./logger";
function Provider({children})
{
    const [state,dispatch] = useReducer(Logger(reducer),initState)
    return(
        <Context.Provider value={[state,dispatch]}>
            {children }
        </Context.Provider>
    )
}
export default Provider