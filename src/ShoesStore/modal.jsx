export default function Modal(props) {
  const { carts, handleCartQuantity, handleDeleteCart } = props;
  console.log(carts)
  return (
    <div>
      {/* Modal toggle */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Open Cart
      </button>
      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Images
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                 <th scope="col" className="px-6 py-3">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {
                carts.map((item) => {
                  return (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" >
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {item.name}
                      </th>
                      <td className="px-6 py-4">
                        <img className="size-25" src={item.image} alt="..." />
                      </td>
                      <td className="px-6 py-4">
                        {item.price}
                      </td>
                      <td className="px-6 py-4">
                        <button disabled={item.soLuong===1} onClick={() => (
                          handleCartQuantity(item.id, -1)
                        )} className="px-2 py-2 rounded-md border border-black text-black" >

                          -

                        </button>
                        <span className="px-2">{item.soLuong}</span>
                        <button onClick={() => (
                          handleCartQuantity(item.id, 1)
                        )} className="px-2 py-2 rounded-md border border-black text-black" >

                          +

                        </button>
                      </td>
                      <td className="px-6 py-4">
                        {item.price * item.soLuong}
                      </td>
                       <td onClick={() => (
                        handleDeleteCart(item.id)
                       )} className="px-6 py-4 text-red-600 cursor-pointer">
                        X
                      </td>
                    </tr>
                  )



                })
              }

            </tbody>
          </table>
        </div>



      </div>
    </div >
  );
}
