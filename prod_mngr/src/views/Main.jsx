import React, { useEffect, useState } from 'react';
import PMForm from '../components/PMForm';
import PMList from '../components/PMList';
import axios from 'axios';

const Main = (props) => {
    const [pms, setPMs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pms')
            .then(res=>{
                console.log(res.data);
                setPMs(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = pmsId => {
        setPMs(pms.filter(pms => pms._id != pmsId));
    }

    const deletePMs = ( (deleteID) => {
        axios.delete('http://localhost:8000/api/pms' + deleteID)
            .then(res => {
                console.log(res.data);
                //Remove from DOM after successfully deleted.
                setPMs(pms.filter( (pms) => pms._id !== deleteID))
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h3>Product Input Form</h3>
            <PMForm />
            <hr/>
            {loaded && <PMList pms={pms} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;

