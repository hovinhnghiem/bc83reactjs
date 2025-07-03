
export default function Shoes(props) {
    const { product, handleAddCart, getProduct } = props;
 const handleDetail = () => {
    getProduct(product);
  };
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.image} alt={product.name} />
            </a>
            <div className="p-5">
                <p className="text-xl font-extrabold text-gray-900">{product.name}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
                <button onClick={() => {
                    handleAddCart(product)
                }}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Add Cart
                </button>
                <button
                    onClick={handleDetail}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Detail
                </button>
            </div>
        </div>


    )
}
