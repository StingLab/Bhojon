import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";

const FoodVariant = () => {
  const summaryData = [
    {
      name: "Lifetime Orders",
      value: 1000,
    },
    {
      name: "Today Orders",
      value: 100,
    },
    {
      name: "Today Sell",
      value: 80,
    },
    {
      name: "Total Customer",
      value: 8000,
    },
    {
      name: "Total Delivered",
      value: 6000,
    },
    {
      name: "Total Reservation",
      value: 90,
    },
  ];

  const latestSummary = [
    {
      title: "Latest Order",
      data: [
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
      ],
    },
    {
      title: "Delivered Order",
      data: [
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
      ],
    },
    {
      title: "Cancel Order",
      data: [
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
        {
          name: "Kamal Hassan",
          phone: "0171742241476",
          order: 8787,
          table: "",
          time: "23:20:04",
        },
      ],
    },
  ];

  // set website title
  useWebsiteTitle("Manage Food | Food Variant");

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between border-b p-2 mb-4">
        <h2 className="uppercase font-semibold">Food Variant</h2>

        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-xs input-bordered"
            />
            <button className="btn btn-xs flex items-center gap-x-2 uppercase">
              <BiSearch /> Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="form-control">
            <label className="input-group input-group-xs">
              <span className="btn btn-xs bg-gray-700">From</span>
              <input
                type="date"
                placeholder="Start Date"
                className="input input-bordered input-xs"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-xs">
              <span className="btn btn-xs bg-gray-700">To</span>
              <input
                type="date"
                placeholder="End Date"
                className="input input-bordered input-xs"
              />
            </label>
          </div>

          <button className="btn btn-xs">Search</button>
          <button className="btn btn-xs">Reset</button>
        </div>
      </div>

      <div className="p-2">
        <table className="table table-zebra table-compact w-full">
          <thead className="text-gray-600">
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Category Name</th>
              <th>Parent Menu</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>
                <select className="select select-primary select-xs w-fullmax-w-xs">
                  <option selected>Active</option>
                  <option>Inactive</option>
                </select>
              </td>
              <td className="flex items-center gap-x-2">
                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodVariant;
