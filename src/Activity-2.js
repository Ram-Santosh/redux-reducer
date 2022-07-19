import { useEffect, useState } from "react"
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export default function Api () {
    var [data, setData] = useState([]);
    async function handleAPI () {
        await axios.get(url)
        .then(response => setData(response.data))
    }
    console.log(data)

    return (
        <>
            <button onClick={handleAPI}>Call API</button>
            {data.map((user,id) => {
                return <p key={id}>{user["username"]}</p>
            })}
        </>
    )
}