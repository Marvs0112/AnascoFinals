import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {

    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get(`http://localhost:8000/api/items`);
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items', error)
        }
    };

    return(
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} : {item.middle_name} : {item.last_name} : 
                        {item.house_no} : {item.street} : {item.subd} : {item.barangay} : {item.city} : {item.province} : {item.country} : {item.postal} :
                        {item.email} : {item.phone} : {item.date_of_birth} : {item.place_of_birth} : {item.sex} : 
                        {item.citizenship} : {item.civil_status} : {item.height} : {item.weight} : {item.blood_type}:
                        {item.fathern} : {item.fatherm} : {item.fatherl} : {item.fatherext} :
                        {item.mothern} : {item.motherm} : {item.motherl}  :
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ItemList;