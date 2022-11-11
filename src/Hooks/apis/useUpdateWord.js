import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UseUpdateWord = (data, wordlist, navigate) => {
    console.log(data)
    console.log(wordlist);
    axios.put(`http://localhost:3001/Words/${wordlist.id}`,{
        id:wordlist.id,
        eng:data.eng,
        kor:data.kor,
        day: wordlist.day
    }).then(res => {
        return navigate('/');
    })
}