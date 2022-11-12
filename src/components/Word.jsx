import {WordList} from './WordList';
import {useWord} from "../Hooks/apis/useWord";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


export const Word = () => {
    const navigate = useNavigate();
    const day = useParams();
    const [WordListFnc, deleteWord] = useWord(day);

    return <>
        <h1>WordList</h1>
        <h3>Day {day.day}</h3>

        <table>
            <tbody>
                {
                    WordListFnc.map(wordlist => (
                        <WordList key={wordlist.id} wordlist={wordlist}/>
                    ))
                }
            </tbody>
        </table>
    </>
}