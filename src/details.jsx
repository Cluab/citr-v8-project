import { useParams } from "react-router";

const Details = () => {
    const {id} = useParams()
    return (<><h2>hi!</h2>
    <h1>{id}</h1></>
    )
  };
  
  export default Details;