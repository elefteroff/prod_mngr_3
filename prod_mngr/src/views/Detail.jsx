import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
    
const Detail = (props) => {
    const [pm, setPM] = useState({})
    const { id } = useParams(); 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pms/' + id)
            .then(res => {
                console.log(res.data)
                setPM(res.data)})
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Name: {pm.name}</p>
            <p>Price: {pm.price}</p>
            <p>Description: {pm.description}</p>
        </div>
    )
    
}
    
export default Detail;