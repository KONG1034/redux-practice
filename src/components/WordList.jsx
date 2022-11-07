import { useParams } from "react-router";

const WordList = () => {
    const { id } = useParams();

    return <>
        <h1>WordList</h1>
        <h3>Day {id}</h3>
    </>
}

export default WordList;