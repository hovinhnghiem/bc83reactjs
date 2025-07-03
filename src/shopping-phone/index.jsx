import { useState } from "react";
import Phone from "./phone";
import TechDetail from "./tech-detail";
import data from "./data.json";
import Modal from "./modal";

export default function ShoppingPhone() {
  const [listProduct, setListProduct] = useState(data);
  const [productDetail, setProductDetail] = useState(listProduct[0]);
  const [carts, setCarts] = useState([])

  const handleAddCart = (phone) => {
    const newCarts = [...carts]

    //Kiểm tra sản phẩm đã có trong cart hay chưa
    const index = newCarts.findIndex((item) => item.maSP === phone.maSP)

    if (index === -1) {
      //sp them vao chua ton tai trong cart

      //Them san pham vao cart
      newCarts.push({ ...phone, soLuong: 1 })
    }else {
      //thay đổi số lượng sản phẩm trong giỏ hàng
      newCarts[index].soLuong +=1
    }
    //setcart với giá trị new carts
    setCarts(newCarts)
  }

  //maSP: dung de thay doi san pham can thay doi so luong

  const handleCartQuantity = (maSP, quantity) => {
    // //Tim mã sản phẩm cần thay đổi số lượng
    // const newCarts = [...carts]
    // const index = newCarts.findIndex((item) => item.maSP === maSP)

    // if (index !== -1) {
    //   newCarts[index].soLuong += quantity  
    // }
    // setCarts(newCarts)
    //c2
    setCarts(
      carts.map((item) =>
        item.maSP === maSP
          ? { ...item, soLuong: item.soLuong + quantity }
          : item
      )
    )
  }

  const handleDeleteCart = (maSP) => {
    // const newCarts = [...carts]
    // const index = newCarts.findIndex(item => item.maSP === maSP)

    // if (index !== -1) {
    //   newCarts.splice(index, 1)
    //   setCarts(newCarts);
    // }
    //c2
    setCarts(carts.filter((item) => item.maSP !== maSP))
  }

  const renderListProduct = () => {
    return listProduct.map((product) => {
      return (
        <Phone
          key={product.maSP}
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
      <h1 className="text-5xl text-center mb-5">Shopping Phone</h1>
      <div className="grid grid-cols-3 gap-5">{renderListProduct()}</div>
      <TechDetail productDetail={productDetail} />
    </div>
  );
}
