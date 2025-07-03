import { useState } from "react";
import data from "./data.json";
import Shoes from "./shoes"
import Modal from "./modal";
import TechDetail from "./shoes-detail";

export default function ShoesStore() {
    const [listProduct, setListProduct] = useState(data);
    const [productDetail, setProductDetail] = useState(listProduct[0]);
    const [carts, setCarts] = useState([])

    const handleAddCart = (shoes) => {
        const newCarts = [...carts]

        //Kiểm tra sản phẩm đã có trong cart hay chưa
        const index = newCarts.findIndex((item) => item.id === shoes.id)

        if (index === -1) {
            //sp them vao chua ton tai trong cart

            //Them san pham vao cart
            newCarts.push({ ...shoes, soLuong: 1 })
        } else {
            //thay đổi số lượng sản phẩm trong giỏ hàng
            newCarts[index].soLuong += 1
        }
        //setcart với giá trị new carts
        setCarts(newCarts)
    }

    //id: dung de thay doi san pham can thay doi so luong

    const handleCartQuantity = (id, quantity) => {

        setCarts(
            carts.map((item) =>
                item.id === id
                    ? { ...item, soLuong: item.soLuong + quantity }
                    : item
            )
        )
    }
    const handleDeleteCart = (id) => {
    setCarts(carts.filter((item) => item.id !== id))
  }
    //Show san pham ra man hinh
    const renderListProduct = () => {
        return listProduct.map((product) => {
            return (
                <Shoes
                    key={product.id}
                    product={product}
                    getProduct={handleGetProduct}
                    handleAddCart={handleAddCart}
                />
            );
        });
    };
    const handleGetProduct = (product) => {
        setProductDetail(product);
    };

    
    return (
        <div className="container mx-auto">
            <Modal carts={carts} handleCartQuantity={handleCartQuantity} handleDeleteCart={handleDeleteCart} />
            <h1 className="text-6xl text-center">Shoes Store</h1>
            <div className="grid grid-cols-3 gap-3">{renderListProduct()}</div>
            <TechDetail productDetail={productDetail} />
        </div>
    )
}
