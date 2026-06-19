import { useParams } from "react-router-dom";
export default function UpdateProduct() {
    const { id } = useParams();
    return (<div>UpdateProduct  {id}</div>);
}
