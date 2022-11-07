import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectDayNav = (e) => {
    let navigate = useNavigate();
    return navigate(`/${Number(e)}`);
}

export default SelectDayNav;