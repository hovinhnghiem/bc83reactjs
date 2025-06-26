import { useState } from 'react'

export default function ChangeColorCar() {
    const [imgPath, setImgPath] = useState("./images/red-car.jpg")

    // const handleChangeRedCar = () => {
    //     //update news value for isLogin
    //     setImgPath("./images/red-car.jpg");
    // }
    // const handleChangeSilverCar = () => {
    //     //update news value for isLogin
    //     setImgPath("./images/silver-car.jpg");
    // }
    // const handleChangeBlackCar = () => {
    //     //update news value for isLogin
    //     setImgPath("./images/black-car.jpg");
    // }
const handleChangeColor = (path) => {
    setImgPath(path);
}





    return (
        <div>
            <h1>ChangeColorCar</h1>
            <div style={{ display: "flex" }}>
                <div><img src={imgPath} width="500px" /></div>
                <div>
                    <button onClick={() => handleChangeColor("./images/red-car.jpg")}>Red Color</button>
                    <button onClick={() => handleChangeColor("./images/silver-car.jpg")}>Silver Color</button>
                    <button onClick={() => handleChangeColor("./images/black-car.jpg")}>Black Color</button>
                </div>
            </div>

        </div>
    )
}
