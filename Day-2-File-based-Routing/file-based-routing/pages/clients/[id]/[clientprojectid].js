import { useReducer } from "react";

function SelectedClientProjectPage(){
   const router = useReducer();

   console.log(router.query);
    
    return(
        <div>
            <h1>The Select Client Page</h1>
        </div>
    );
}

export default SelectedClientProjectPage;