//Dynamic params with useparams hook
//Dynamic params are values that are taken from the url. useparams hook helps us to read those values inside a component
import {useParams } from "react-router-dom";
export function DynamicUseParams () {
    const {id} = useParams();
    return(
        <div>
        <h2>Dynamic params with UseParams</h2>
        <p>Product ID from URL:{id}</p>
        </div>
    );
}