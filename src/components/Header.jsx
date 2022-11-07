import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GetAllDays from "../Hooks/apis/GetAllDays";
import SelectDayNav from "../Hooks/SelectDayNav";
import WordList from "./WordList";


const Header = () => {
    const navigate = useNavigate();
    const days = GetAllDays('/days');

    const selectDay = (e) => {
        navigate(`/${Number(e.target.value)}`);
    }

    return <>
        <h1>단어장</h1>
        <select onChange={selectDay}>
            {
                days.map(day => (
                    <option key={day.id} value={day.Day}>{day.Day}</option>
                ))
            }
        </select>
    </>
}
export default Header;