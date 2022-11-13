import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const DayDelete = () => {
    const {state} = useLocation();
    const dayRef = useRef(null);
    const navigate = useNavigate();

    const selectDay = () => {
        axios.delete(`http://localhost:3001/Days/${dayRef.current.value}`)
        .then(res => {
            navigate('/');
        })
    }

    return <>
        <h1>날짜 삭제하기</h1>
        <select ref={dayRef} onChange={selectDay}>
            {
                state.map(day => (
                    <option key={day.id} value={day.Day}>{day.Day}</option>    
                ))
            }
        </select>
    </>
}