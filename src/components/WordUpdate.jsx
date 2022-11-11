import useAllDay from "../Hooks/apis/useAllDay";
import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseUpdateWord } from "../Hooks/apis/useUpdateWord";

export const WordUpdate = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [data, setData] = useState({
        eng: '',
        kor: ''
    });

    const {eng, kor} = data;

    const onsubmit = (e) => {
        e.preventDefault();
        
        console.log(data);
        UseUpdateWord(data, state, navigate);
    }
    const changeWord = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);

        setData({
            ...data, // 기존의 data 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    }
    return <>
        <h1>단어 수정하기</h1>
        <ul>
            <li>
                <form onSubmit={onsubmit}>
                    <label>영단어: </label><input name="eng" placeholder={state.eng} value={eng} onChange={changeWord}/>
                    <label>의미: </label><input name="kor" placeholder={state.kor} value={kor} onChange={changeWord}/>
                    <button>수정하기</button>
                </form>
            </li>
        </ul>
    </>
}