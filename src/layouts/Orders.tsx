import {
  ClipboardList,
  Search,
  Calendar,
  Filter,
  CheckCircle,
} from "lucide-react";

export default function Orders() {
  return (
    <div className="min-h-screen bg-green-50/40 px-6 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-green-100">
            <ClipboardList className="text-green-700" size={26} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">My Orders</h1>
            <p className="text-sm text-gray-500">
              Track and manage your orders
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search Order ID"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div className="relative">
            <Filter
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <select className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-600">
              <option>All Status</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 text-gray-600"
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition">
            <CheckCircle size={18} />
            Apply Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
        <ClipboardList size={48} className="mx-auto text-green-300 mb-4" />
        <h2 className="text-lg font-semibold text-gray-700">No Orders Found</h2>
        <p className="text-sm text-gray-500 mt-1">
          Your orders will appear here once you place them
        </p>
      </div>
    </div>
  );
}
