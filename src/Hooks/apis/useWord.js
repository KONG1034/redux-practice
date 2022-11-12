import axios from "axios";
import { useEffect,useState } from "react";

export const useWord = (day) => {
    let [data, setData] = useState([]);

    const deleteWord = (wordlist) => {
        axios.delete(`http://localhost:3001/Words/${wordlist.id}`)
        .then(res => {
            console.log(res);
            if(res.status === 200) {
                setData(data.filter(el => el.id !== wordlist.id))
            }
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/Words', {
            params: {day:`${day.day}`}
        })
        .then(res => {
            return res.data;
        })
        .then(res => {
            return setData(res);
        })
    }, [day.day]);
    
    return [data, deleteWord];
}