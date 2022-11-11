import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {useWord} from "../Hooks/apis/useWord";

export const WordList = () => {
    const navigate = useNavigate();
    const day = useParams();
    const [WordList, deleteWord] = 
        useWord(day);
    
    return <>
        <h1>WordList</h1>
        <h3>Day {day.day}</h3>

        <table>
            <tbody>
                {
                    WordList.map(wordlist => (
                        <tr key={wordlist.id}>
                            <td><input type="checkbox"></input></td>
                            <td>{wordlist.eng} {wordlist.kor}</td>
                            <td><button onClick={() => {
                                deleteWord(wordlist);
                            }}>삭제</button></td>
                            <td><button onClick={() => {
                                navigate('/update', {state: wordlist});
                            }}>수정</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}