import { useState } from "react"
import {Word} from './Word';
import {Error} from './Error';
import { useParams } from "react-router-dom";
import { useAllDay } from "../Hooks/apis/useAllDay";
import { useEffect } from "react";
import { useCheckDay } from "../Hooks/apis/useCheckDay";

export const CheckWord = () => {
    const day = useParams();
    const checkDay = useCheckDay(day);
    
    if(checkDay) return <Word/>
            return <Error/>
}