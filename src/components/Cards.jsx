import { useState, useEffect } from 'react'

import Card from './Card';

function Cards() {

    const [deports, setDeports] = useState([]);

    useEffect(() => {
        async function deportsData() {
            const res = await fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php');
            const data = await res.json();
            setDeports(data.sports);
        }
    
        deportsData();
    }, []);

    return (
        <div className="row">
            {deports.map(deport => {
                return (
                    <Card deport={deport} key={deport.idSport} />
                );
            })}
        </div>
    );

}

export default Cards