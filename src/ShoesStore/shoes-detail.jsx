export default function ShoesDetail(props) {
  const { productDetail } = props;

  return (
    <div className="grid grid-cols-2 mt-7">
      <div>
        <img src={productDetail?.image} alt="" />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tên sản phẩm
              </th>
              <td className="px-6 py-4">{productDetail?.name}</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Giá sản phẩm
              </th>
              <td className="px-6 py-4">{productDetail?.price}</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                alias
              </th>
              <td className="px-6 py-4">{productDetail?.alias}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
