import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAllDay = (url) => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/days')
        .then(res => {
            return res.data;
        })
        .then(res => {
            return setData(res);
        })
    }, [url]);
    
    return data;
}