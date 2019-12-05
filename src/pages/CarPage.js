import React from 'react';
import { useParams} from "react-router-dom";
import Car from '../components/Car';

export default function CarPage() {
    const { id } = useParams()
    return (
        <Car id={id} />
    )
}