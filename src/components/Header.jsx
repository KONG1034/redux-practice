import { useEffect } from "react";
import { useState } from "react";
import GetAllDays from "../Hooks/apis/GetAllDays";

const Header = () => {
    
        const days = GetAllDays('/days');
    
    return <>
        <h1>단어장</h1>
        <select>
            {
                days.map(day => (
                    <option key={day.id} value={day.Day}>{day.Day}</option>
                ))
            }
        </select>
    </>
}
export default Header;