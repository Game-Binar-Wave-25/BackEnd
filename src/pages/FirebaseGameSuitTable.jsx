import React from 'react'
import { TitleHeadingComponent } from '../components'
import { database } from '../firebase'
import { ref, child, get } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'

export default function FirebaseGameSuitTable(params) {
    const [data, setData] = useState({})
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
        console.log(data);
    })
    return(
        <>
            <TitleHeadingComponent title="data json firebase"/>
            { JSON.stringify(data)}
        </>
    )
}