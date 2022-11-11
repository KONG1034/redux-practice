import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import {useAllDay} from "../Hooks/apis/useAllDay";


const Header = () => {
    const navigate = useNavigate();
    const days = useAllDay('/days');

    const selectDay = (e) => {
        navigate(`/${Number(e.value)}`);
    }

    return <>
        <h1>단어장</h1>
        <Select options={days} onChange={selectDay}></Select>
    </>
}
export default Header;