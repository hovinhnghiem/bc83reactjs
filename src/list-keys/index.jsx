import { useState } from "react"
import data from "./data.json"
export default function ListKeys() {
    const [listUser] = useState(data);


    const renderListUser = () => {
        const newArr = listUser.map((user) => {
            return (
                <li key={user.id}>
                    Id: {user.id} - Name: {user.name} - Age: {user.age}
                </li>
            )
        })
        return newArr
    }

    return (
        <div>
            <h1>List Key</h1>
            <ul>
                {/* {listUser.map((user) => {
                return (
                    
                )
            })} */}
                {renderListUser()}
            </ul>
        </div>
    )
}
