import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCustomer} from "../slice/CustomerSlice";
import {Customer} from "../model/Customer";
import {RootState} from "../store/Store.ts";
import {setItem} from "../slice/ItemSlice.tsx";
import {Item} from "../model/Item.ts";


export function Add() {

    //customer
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const customers = useSelector((state: RootState) => state.customers.customers);

    //item
    const [itemCode, setItemCode] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const item = useSelector((state:RootState)=>state.items.items)

    function addCustomer() {
        const newCustomer = new Customer(name,address, email, phone);
        dispatch(setCustomer(newCustomer));

    }
    function addItem() {
        const newItem=new Item(itemCode,itemName,itemQuantity,itemPrice);
        dispatch(setItem(newItem));

    }
    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Add Section</h1>
            <div className="grid grid-cols-2 gap-6 p-6">
                {/* Add Customer Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h1>
                    </header>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input name="Name" type="text" placeholder="Name"
                                   className="w-full border border-gray-300 rounded p-2"
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700">Address</label>
                            <input name="Address" type="text" placeholder="Address"
                                   className="w-full border border-gray-300 rounded p-2"
                                   onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input name="Email" type="text" placeholder="Email"
                                   className="w-full border border-gray-300 rounded p-2"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <input name="Phone" type="text" placeholder="Phone"
                                   className="w-full border border-gray-300 rounded p-2"
                                   onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={addCustomer}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Customer
                    </button>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Address</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers && customers.map((customer) => (
                            <tr key={customer.email}>
                                <td className="border p-2">{customer.name}</td>
                                <td className="border p-2">{customer.address}</td>
                                <td className="border p-2">{customer.email}</td>
                                <td className="border p-2">{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Add Item Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h1>
                    </header>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="itemCode" className="block text-gray-700">Code</label>
                            <input name="itemCode" type="text" placeholder="Code" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setItemCode(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="itemName" className="block text-gray-700">Name</label>
                            <input name="itemName" type="text" placeholder="Name" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setItemName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="itemQuantity" className="block text-gray-700">Quantity</label>
                            <input name="itemQuantity" type="number" placeholder="Quantity" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setItemQuantity(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="itemPrice" className="block text-gray-700">Price</label>
                            <input name="itemPrice" type="number" placeholder="Price" className="w-full border border-gray-300 rounded p-2" onChange={(e) => setItemPrice(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={addItem} className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Add Item
                    </button>
                    <table className="w-full border-collapse mt-6">
                        <thead>
                        <tr>
                            <th className="border p-2">Code</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {item && item.map((item) => (
                            <tr key={item.code}>
                                <td className="border p-2">{item.code}</td>
                                <td className="border p-2">{item.name}</td>
                                <td className="border p-2">{item.quantity}</td>
                                <td className="border p-2">{item.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}