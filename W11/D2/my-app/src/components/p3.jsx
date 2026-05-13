import {useParams } from "react-router-dom";
export function MultipleDynamicParams() {
    const {userId,ordderId} = useParams();
    return(
        <div>
            <h2>Multiple Dynamic Params</h2>
            <p>User ID from URL :  {userId} </p>
            <p>orderId from URL :  {userId} </p>
        </div>
    );

}