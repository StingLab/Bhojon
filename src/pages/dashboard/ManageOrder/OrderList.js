import React from "react";
import { AiFillEdit, AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import Swal from "sweetalert2";
import Pagination from "../../../components/Pagination";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const OrderList = () => {
  // set website title
  useWebsiteTitle("Manage Order | Order List");

  const tableHeads = [
    { name: "SL" },
    { name: "Invoice No" },
    { name: "Customer Name" },
    { name: "Waiter" },
    { name: "Table" },
    { name: "State" },
    { name: "Order Date" },
    { name: "Amount" },
    { name: "Action" },
  ];

  const orders = [
    {
      sl: "1",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "2",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "3",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "4",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "5",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "6",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "7",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "8",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "9",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "10",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "11",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "12",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "13",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "14",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "15",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "16",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "17",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "18",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "19",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
    {
      sl: "20",
      invoiceNo: "Invoice-0001",
      customerName: "John Doe",
      waiter: "Van Disel",
      table: "2",
      state: "paid",
      orderDate: "01-01-2023",
      amount: "2000 TK",
    },
  ];

  return (
    <div className="border rounded-md">
      <div className="row border-b p-2">
        <h2 className="col-2 uppercase font-semibold sm:mb-2">Order list</h2>

        <div className="col-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 items-center gap-2 mt-2 md:mt-0 lg:mt-0">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-xs input-bordered w-full"
            />
            <button className="btn btn-xs flex items-center gap-x-2 uppercase">
              <BiSearch /> Search
            </button>
          </div>

          <label className="input-group input-group-xs">
            <input
              type="date"
              placeholder="Start Date"
              className="input input-bordered input-xs w-full"
            />
            <span className="btn btn-xs bg-gray-700">From</span>
          </label>

          <label className="input-group">
            <input
              type="date"
              placeholder="End Date"
              className="input input-bordered input-xs w-full"
            />
            <span className="btn btn-xs bg-gray-700">To</span>
          </label>

          <div className="flex items-center justify-end gap-x-2">
            <button className="btn btn-xs items-center gap-x-1">
              <MdOutlineClear />
              Clear
            </button>
            <button className="btn btn-xs items-center gap-x-1">
              <FiSearch />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto scroll-smooth p-2">
        <table className="table table-zebra table-compact w-full">
          <thead className="text-gray-600">
            <tr>
              {tableHeads?.map((tableHead) => (
                <th key={tableHead?.name}>{tableHead?.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order?.invoiceNo} className="hover">
                <td className="font-bold">{order?.sl}</td>
                <td>{order?.invoiceNo}</td>
                <td>{order?.customerName}</td>
                <td>{order?.waiter}</td>
                <td>{order?.table}</td>
                <td>{order?.state}</td>
                <td>{order?.orderDate}</td>
                <td>{order?.amount}</td>
                <td className="flex items-center gap-x-2">
                  <AiFillEdit className="text-cyan-400 text-2xl hover:bg-white border rounded-md p-1" />
                  <AiFillDelete
                    className="text-rose-500 text-2xl hover:bg-white border rounded-md p-1"
                    onClick={() =>
                      Swal.fire({
                        title: `Are you sure want to delete #${order?.invoiceNo}?`,
                        text: "Remember this can not be undone.",
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonColor: "#ff7562",
                        cancelButtonColor: "#22d3ee",
                        confirmButtonText: "Yes, Delete",
                        cancelButtonText: "No, Cancel",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            `#${order?.invoiceNo} `,
                            "has been deleted.",
                            "success"
                          );
                        } else {
                          Swal.fire(
                            "Canceled!",
                            "Operation is canceled by the user",
                            "info"
                          );
                        }
                      })
                    }
                  />
                  <label htmlFor="my-modal-5">
                    <AiFillInfoCircle className="text-indigo-400 text-2xl hover:bg-white border rounded-md p-1" />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-7xl relative">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
