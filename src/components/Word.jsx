import { WordList } from './WordList';
import { useWord } from "../Hooks/apis/useWord";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAllDay } from '../Hooks/apis/useAllDay';
import { Error } from './Error';
import { useState } from 'react';
import { useCheckDay } from '../Hooks/apis/useCheckDay';


export const Word = () => {
    const day = useParams();
    const [WordListFnc, deleteWord] = useWord(day);

    return <>
        <h1>WordList</h1>
        <h3>Day {day.day}</h3>
        <table>
            <tbody>
                {
                    WordListFnc.map(wordlist => (
                        <WordList key={wordlist.id} wordlist={wordlist} />
                    ))
                }
            </tbody>
        </table>
    </>


}