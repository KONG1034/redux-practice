import { useNavigate } from "react-router-dom";
import useAllDay from "../Hooks/apis/useAllDay";


const Header = () => {
    const navigate = useNavigate();
    const days = useAllDay('/days');

    const selectDay = (e) => {
        navigate(`/${Number(e.target.value)}`);
    }

    return <>
        <h1>단어장</h1>
        <select onChange={selectDay}>
            {
                days.map(day => (
                    <option key={day.id} defaultValue={1} value={day.Day}>{day.Day}</option>
                ))
            }
        </select>
    </>
}
export default Header;