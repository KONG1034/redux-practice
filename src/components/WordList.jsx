import { useParams } from "react-router";
import GetDayWordList from "../Hooks/apis/GetDayWordList";

const WordList = () => {
    const day = useParams();
    console.log(day.day);
    const WordList = GetDayWordList(day);
    console.log(WordList);

    return <>
        <h1>WordList</h1>
        <h3>Day {day.day}</h3>

        {
            WordList.map(wordlist => (
                <p key={wordlist.id}>{wordlist.eng} {wordlist.kor}</p>
            ))
        }
    </>
}

export default WordList;