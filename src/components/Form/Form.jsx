import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slice/categoriesSlice";
import { addProduct } from "../../redux/slice/productsSlice";
export default function Form() {
    const dispatch = useDispatch();
    const { items: categories, status } = useSelector((state) => state.categories);
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            await dispatch(addProduct({
                title: formData.title,
                price: parseFloat(formData.price),
                description: formData.description,
                image: formData.image || "https://i.pravatar.cc",
                category: formData.category,
                rating: { rate: 0, count: 0 } // إضافة خاصية rating مع قيم افتراضية
            })).unwrap(); // تأكد من أن العملية نجحت قبل المتابعة
            setMessage("Product added successfully!");
            setFormData({ title: "", price: "", description: "", image: "", category: "" });
        }
        catch (error) {
            setMessage("Failed to add product.");
        }
        setLoading(false);
    };
    return (<div className=" ">
      <h2 className="text-xl font-semibold mb-8 text-blue-500">Add Product</h2>
      {message && <p className="bg-[#38f71f44] text-green-500 rounded-md text-xl mb-4 p-2">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-fit mx-auto ">
        <div className="flex gap-3.5">
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 shadow-2xs shadow-blue-500 rounded-md focus:outline-blue-300 bg-gray-100" required/>
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 shadow-2xs shadow-blue-500  rounded-md focus:outline-blue-300 bg-gray-100" required/>
        </div>
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 shadow-2xs shadow-blue-500  rounded-md focus:outline-blue-300 bg-gray-100" required/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className=" p-2 shadow-2xs shadow-blue-500  rounded-md focus:outline-blue-300 bg-gray-100"/>
      <select name="category" value={formData.category} onChange={handleChange} className=" p-2 shadow-2xs shadow-blue-500  rounded-md focus:outline-blue-300 text-gray-500 bg-gray-100">
          <option value="">Select Category (Required)</option>
          {categories.map((cat) => (<option key={cat} value={cat}>
              {cat}
            </option>))}
        </select>
        <button type="submit" className=" bg-blue-300 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-500 disabled:bg-gray-200" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>);
}
