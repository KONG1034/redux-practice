import { useState, useEffect } from "react"
import axios from 'axios';

export const useCheckDay = (day) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3001/Days/${day.day}`)
        .then(res => {
            console.log(res)
            if(res.status === 200) {
                return setData(!data);
            } else {
                return setData(data);
            }
        })
        .catch(err => {
            return setData(data);
        })
    }, [day.day]);

    return data;
}