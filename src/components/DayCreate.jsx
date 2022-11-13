import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const DayCreate = () => {
    const navigate = useNavigate();
    const {state} = useLocation();

    const createDay = () => {
        console.log(state);
        axios.post('http://localhost:3001/Days',{
            "Day": state.length,
            "label": state.length,
            "value": state.length
        })
        .then(res => {
            navigate('/');
        })
    }

    return <>
        <h1>날짜 추가하기</h1>
            <p> 현재 일수: {state.length}일</p>
            <button onClick={createDay}>추가하기</button>
    </>
}