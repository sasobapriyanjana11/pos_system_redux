import {deleteCustomer } from "../slice/CustomerSlice.tsx"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {deleteItem} from "../slice/ItemSlice.tsx";


export function Delete() {
    const dispatch = useDispatch();
    const customers = useSelector((state: RootState) => state.customers.customers);
    const items = useSelector((state: RootState) => state.items.items);
    function handleDeleteCustomer(email:string) {
        dispatch(deleteCustomer(email));
    }
    function handleDeleteItem(code: string) {
        dispatch(deleteItem(code));
    }
    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-purple-500 mb-6 text-my">Delete Section</h1>
            <div className="grid grid-cols-2 gap-6 p-6">
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    {/* Customers Section */}
                    <section>
                        <h1 className="text-xl font-bold text-gray-700 mb-4">Delete Customers</h1>
                        <table className="w-full border-collapse mt-6">
                            <thead>
                            <tr>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Address</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Phone</th>
                                <th className="border p-2">Action</th>
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
                                        <button
                                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                            onClick={() => handleDeleteCustomer(customer.email)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                </div>
                {/* Items Section */}
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <section>
                        <h1 className="text-xl font-bold text-gray-700 mb-4">Delete Items</h1>
                        <table className="w-full border-collapse mt-6">
                            <thead>
                            <tr>
                                <th className="border p-2">Code</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Qty</th>
                                <th className="border p-2">Price</th>
                                <th className="border p-2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item) => (
                                <tr key={item.code.toString()} className="border p-2">
                                    <td className="border p-2">{item.code}</td>
                                    <td className="border p-2">{item.name}</td>
                                    <td className="border p-2">{item.quantity}</td>
                                    <td className="border p-2">{item.price}</td>
                                    <td className="border p-2">
                                        <button
                                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                            onClick={() => handleDeleteItem(item.code.toString())}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
    );
}