import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const PMList = (props) => {
    console.log(props.pms)
    
    const { removeFromDom } = props;
    
    const deleteOnePM = (_id) => {
        axios.delete('http://localhost:8000/api/pms/' + _id)
            .then(res => {
                removeFromDom(_id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>Product List:</h3>
            {props.pms.map( (product, i) =>
                <p key={i}>
                    <Link to={"/pms/" + product._id}>{product.name}</Link>
                    <button onClick={(e)=>{deleteOnePM(product._id)}}>Delete</button>
                </p>)}
        </div>)//The link links to the route "'/pms/' + pms._id" and returns product names as clickable links.
}

export default PMList;