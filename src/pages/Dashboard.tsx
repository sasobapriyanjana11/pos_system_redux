import "../style/Dashboard.css"
import {Customer} from "../model/Customer.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
export function Dashboard() {

    const customers = useSelector((state: RootState) => state.customers.customers);
    const item = useSelector((state:RootState)=>state.items.items)
    return (
        <div className=" md-8">
            <h1 className="text-3xl font-medium text-green-500 mb-6 text-my">Dashboard</h1>
            <div  className="p-6 grid grid-cols-2" >
                {/* left  */}
                <div>
                    <h1 className="text-3xl font-medium text-green-500 mb-6">Customer Details</h1>
                    <table className=" table-auto border cellPadding-8 marginTop-20px w-full">
                        <thead>
                        <tr className="border">
                            <th className="table-css">Name</th>
                            <th className="table-css">Address</th>
                            <th className="table-css">Email</th>
                            <th className="table-css">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer:Customer) => (
                            <tr key={customer.email}>
                                <td className="table-css">{customer.name}</td>
                                <td className="table-css">{customer.address}</td>
                                <td className="table-css">{customer.email}</td>
                                <td className="table-css">{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="item-card">
                        <h1 className="text-3xl font-medium text-green-500 mb-6">Item Details</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {item.map((item) => (
                                <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:bg-green-200 transition duration-500">
                                    <p><span className="font-bold">Code:</span> {item.code}</p>
                                    <p><span className="font-bold">Name:</span> {item.name}</p>
                                    <p><span className="font-bold">Quantity:</span> {item.quantity}</p>
                                    <p><span className="font-bold">Price:</span> {item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
