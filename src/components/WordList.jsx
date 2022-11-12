import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {useWord} from "../Hooks/apis/useWord";
import  {useUpdateCheck}  from "../Hooks/apis/useUpdateCheck";
import axios from "axios";

export const WordList = (props) => {
    const navigate = useNavigate();
    const day = useParams();
    const [WordList, deleteWord] = useWord(day);
    const [complete, setComplete] = useState(props.wordlist.checked);
    
    const checkWord = (wordlist, e) => {
        setComplete(!complete);
        
        axios.put(`http://localhost:3001/Words/${wordlist.id}`,{
            ...wordlist,
            checked: !complete
        }).then(res => {
            if(res.ok) {
                setComplete(!complete)
            };
        })
    }

    return <>
        <tr key={props.wordlist.id}>
            <td><input type="checkbox" checked={complete} onChange={(e) => {
                checkWord(props.wordlist, e);
            }}></input></td>
            <td>{props.wordlist.eng} {props.wordlist.kor}</td>
            <td><button onClick={() => {
                deleteWord(props.wordlist);
            }}>삭제</button></td>
            <td><button onClick={() => {
                navigate('/update', {state: props.wordlist});
            }}>수정</button></td>
        </tr>
    </>
}