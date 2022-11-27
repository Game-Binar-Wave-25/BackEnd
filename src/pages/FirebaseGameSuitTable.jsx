import React from 'react'
import { TitleHeadingComponent } from '../components'
import { database } from '../firebase'
import { ref, child, get } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component';

export default function FirebaseGameSuitTable(params) {
    const [data, setData] = useState({})

    const columns = [
        {
            name: 'User ID',
            selector: row => row.userId,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Total Game',
            selector: row => row.total_game,
        },
        {
            name: 'Total Point',
            selector: row => row.total_point,
        },
        {
            name: 'Pick Bot',
            selector: row => row.game_record.pick_bot,
        },
        {
            name: 'Pick Player',
            selector: row => row.game_record.pick_player,
        },
        {
            name: 'Winner',
            selector: row => row.game_record.pick_winner,
        },
    ];

    const dataTable = async () => {
        try {
            const db = await get(child(ref(database),'Histories/'))
            setData(db.val())
        } catch (error) {
            console.log(error);
        }
    }
       
    useEffect(()=>{
        dataTable()
    })
    return(
        <>
            <TitleHeadingComponent title="Data History Player"/>
            {
                data != null && 
                <DataTable
                columns={columns}
                data={data.record}
                />
            }
            {/* { JSON.stringify(data)} */}
        </>
    )
}