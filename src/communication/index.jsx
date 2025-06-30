import { useState } from "react"
import Child from "./child"

export default function Communication() {
    const [user, setUser] = useState("Nghiem")
    const [age, setAge] = useState(25)
    const handleChangeUser = () => {
        setUser("Cybersoft")
    }
    const handleGetUserReset = (data) => {
        //Nhan lai data tu component con
        setUser(data)
    }
    return (
        <div>
            <h1>Communication</h1>
            <p>Username: {user} - Age: {age}</p>
            <button onClick={handleChangeUser} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Change Usser</button>
            <Child user={user} age={age} handleGetUser={handleGetUserReset} />
        </div>
    )
}
