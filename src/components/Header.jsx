import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import {useAllDay} from "../Hooks/apis/useAllDay";
import {useRef} from 'react';


export const Header = () => {
    const navigate = useNavigate();
    const days = useAllDay('/days');
    const dayRef = useRef(null);

    const selectDay = () => {
        navigate(`/${dayRef.current.value}`);
    }

    const createWord = () => {
        navigate('/create');
    }

    return <>
        <h1>단어장</h1>
        <button onClick={createWord}>단어 추가</button>
        <select ref={dayRef} onChange={selectDay} defaultValue={1}>
            {
                days.map(day => (
                    <option key={day.id} value={day.Day}>{day.Day}</option>
                ))
            }
        </select>
    </>
}