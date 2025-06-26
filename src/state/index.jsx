import { useState } from "react";

export default function State() {
    let username = "Nghiem";
    const [isLogin, setLogin] = useState(false);

    const handleLogin = () => {
        //update news value for isLogin
        setLogin(true);
    }

    const handleLogout = () => {
        //update news value for isLogin
        setLogin(false);
    }


    const renderInfo = () => {
        if (isLogin) {
            return (
                <div>
                    <h1>Hello {username}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Vui Long Login</h1>
                    <button onClick={handleLogin}>Vui Long Login</button>
                </div>
            )
        }
    }
    return (
        <div>
            <h1>State</h1>
            {/* {isLogin ? (<div>
                <h1>Hello {username}</h1>
                <button>Logout</button>
            </div>) : (<div>
                <h1>Vui Long Login</h1>
                <button>Vui Long Login</button>
            </div>)} */}

            {renderInfo()}
        </div>

    )
}
