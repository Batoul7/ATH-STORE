import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../redux/slice/productsSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const Products = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (status === "loading")
        return <p>Loading products...</p>;
    if (status === "failed")
        return <p> Error : {error}</p>;
    const headers = ["Product Image", "Product Name", "Price", "Actions"];
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await dispatch(deleteProduct(id));
        }
    };
    return (<div className="w-full overflow-auto max-h-[500px]">
      <div className="w-max min-w-full overflow-x-auto">
        <table className="bg-white border-none min-w-full">
          <thead>
            <tr className="bg-blue-300 text-white">
              {headers.map((header, index) => (<th key={index} className="px-4 py-2 whitespace-nowrap">
                  {header}
                </th>))}
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {items.map((product) => (<tr key={product.id} className="text-center border-b border-blue-200">
                <td className="py-2">
                  <img src={product.image} alt={product.title} className="w-16 h-16 mx-auto"/>
                </td>
                <td className="py-2 w-20 text-center align-middle truncate border-l border-blue-200">{product.title}</td>
                <td className="py-2 border-l border-blue-200">{product.price}$</td>
                <td className="p-2 whitespace-nowrap border-l border-blue-200 text-xl">
                  <Link to={`/dashboard/product/update/${product.id}`} className="text-blue-500 mr-2">
                    <FontAwesomeIcon icon={faEdit}/>
                  </Link>
                  <button onClick={() => handleDelete(product.id)} className="text-red-500 cursor-pointer">
                     <FontAwesomeIcon icon={faTrash}/>
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>);
};
export default Products;
