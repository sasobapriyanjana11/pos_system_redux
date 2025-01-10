import {useState} from "react";
import { Customer } from "../model/Customer.ts";
import {useDispatch, useSelector} from "react-redux";
import {updateCustomer} from "../slice/CustomerSlice.tsx";
import {RootState} from "../store/Store.ts";
import {Item} from "../model/Item.ts";
import {updateItem} from "../slice/ItemSlice.tsx";

export function Update() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const customers = useSelector((state: RootState) => state.customers.customers);

    // item
    const [itemCode, setItemCode] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const items = useSelector((state:RootState)=>state.items.items)

    function handleRowClick(customer: Customer) {
        setName(customer.name);
        setAddress(customer.address);
        setEmail(customer.email);
        setPhone(customer.phone);
    }
    function handleUpdateCustomer() {
        const updatedCustomer = { name, address, phone, email };
        dispatch(updateCustomer(updatedCustomer));
    }

    //item button action
    function handleItemRowClick(item: Item) {
        setItemCode(item.code.toString());
        setItemName(item.name);
        setItemQuantity(item.quantity.toString());
        setItemPrice(item.price.toString());
    }
    function handleUpdateItem() {
        const updatedItem = { code:itemCode, name: itemName,  quantity: itemQuantity,price: itemPrice };
        dispatch(updateItem(updatedItem));
    }
    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-purple-500 mb-6 text-my">Update Section</h1>
            <div className="grid grid-cols-2 gap-6 p-6">
                {/* Update Customer Section */}
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Update Customer</h1>
                    </header>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input className="w-full border border-gray-300 rounded p-2" name="Name" type="text"
                                   placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700">Address</label>
                            <input className="w-full border border-gray-300 rounded p-2" name="Address" type="text"
                                   placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input className="w-full border border-gray-300 rounded p-2" type="text" placeholder="Email"
                                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <input className="w-full border border-gray-300 rounded p-2" name="Phone" type="text"
                                   placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleUpdateCustomer} className="mt-4 bg-purple-600 bg-opacity-100 text-white py-2 px-4 rounded hover:bg-blue-600">Update</button>
                    <br/>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.email}>
                                <td className="border p-2">{customer.name}</td>
                                <td className="border p-2">{customer.address}</td>
                                <td className="border p-2">{customer.email}</td>
                                <td className="border p-2">{customer.phone}</td>
                                <td className="border p-2">
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => handleRowClick(customer)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Update Item Section */}
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Update Item</h1>
                    </header>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="itemCode" className="block text-gray-700">Code</label>
                            <input name="itemCode" type="text" placeholder="Code" className="w-full border border-gray-300 rounded p-2" value={itemCode} onChange={(e) => setItemCode(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="itemName" className="block text-gray-700">Name</label>
                            <input name="itemName" type="text" placeholder="Name" className="w-full border border-gray-300 rounded p-2" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="itemQuantity" className="block text-gray-700">Quantity</label>
                            <input name="itemQuantity" type="number" placeholder="Quantity" className="w-full border border-gray-300 rounded p-2" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="itemPrice" className="block text-gray-700">Price</label>
                            <input name="itemPrice" type="number" placeholder="Price" className="w-full border border-gray-300 rounded p-2" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={handleUpdateItem} className="mt-4 bg-indigo-600 bg-opacity-100 text-white py-2 px-4 rounded hover:bg-blue-600">Update</button>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Code</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">QTY</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items && items.map((item) => (
                            <tr key={item.code.toString()}>
                                <td className="border p-2">{item.code}</td>
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">{item.quantity}</td>
                                <td className="border p-2">{item.price}</td>
                                <td className="border p-2">
                                    <button onClick={() => handleItemRowClick(item)} className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Edit</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}