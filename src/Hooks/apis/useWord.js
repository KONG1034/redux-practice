import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const useWord = (day) => {
    let navigate = useNavigate();
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