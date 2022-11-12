import axios from 'axios';

export const UseUpdateWord = (data, wordlist, navigate) => {
    axios.put(`http://localhost:3001/Words/${wordlist.id}`,{
        id:wordlist.id,
        eng:data.eng,
        kor:data.kor,
        day: wordlist.day
    }).then(res => {
        return navigate('/');
    })
}