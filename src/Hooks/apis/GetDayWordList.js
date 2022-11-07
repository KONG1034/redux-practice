import axios from "axios";
import { useEffect,useState } from "react";

const GetDayWordList = (day) => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:3001/Words?day=${day.day}`
        })
        .then(res => {
            return res.data;
        })
        .then(res => {
            return setData(res);
        })
    }, [day.day]);
    
    return data;
}

export default GetDayWordList;