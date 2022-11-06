import axios from 'axios';
import { useEffect, useState } from 'react';

const GetAllDays = (url) => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method:'get',
            url: url,
            baseURL: 'http://localhost:3001/'
        })
        .then(res => {
            return res.data;
        })
        .then(res => {
            return setData(res);
        })
    }, [url]);
    
    return data;
}

export default GetAllDays;