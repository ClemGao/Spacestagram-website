import React, { useState, useEffect } from 'react';
import './Homepage.css';
import Item from './Item';

function Homepage() {

    const [items, setItems] = useState([]);
    const startDate = "2021-12-30";
    const endDate = "2022-01-01";
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=4HsyKkyTeuhUJeI9nrgTY0lIVkpaO6lyFS8bb9l0&start_date=2022-01-02&end_date=2022-01-17")
            .then(res => res.json())
            .then(res => {
                setItems(res);
                console.log(res);
            });
    }, [])

    return (
        <div className='itemsContainer'>
            <ul className='itemContainer'>
                {
                    items.map(item => (
                        <Item hdurl={item.hdurl} explanation={item.explanation} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Homepage
