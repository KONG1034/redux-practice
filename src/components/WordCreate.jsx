import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import {useAllDay} from '../Hooks/apis/useAllDay';
import Select from 'react-select';
import { useState, useRef } from "react";

export const WordCreate = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const days = useAllDay('/days');
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const createWord = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/Words`,{
            "eng": engRef.current.value,
            "kor": korRef.current.value,
            "day": dayRef.current.value,
            "checked": false,
            "show": false
        })
        .then(res => {
            navigate(`/${dayRef.current.value}`);
        })
    }

    return <>
        <h1>단어 추가하기</h1>
        <form onSubmit={createWord}>
            <label>날짜: </label>
            <select ref={dayRef}>
                {
                    days.map(day => (
                        <option key={day.id} value={day.Day}>{day.Day}</option>
                    ))
                }
            </select>
            <label>단어: </label><input name="eng" type="text" ref={engRef}/>
            <label>의미: </label><input name="kor" type="text" ref={korRef}/>
            <button>추가하기</button>
        </form>
    </>
}