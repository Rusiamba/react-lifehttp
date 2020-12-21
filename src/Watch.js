import {useEffect, useState} from "react";
import moment from 'moment';

const Watch = ({name, timeZone, id, deleteWatch}) => {
    const [time, setTime] = useState(moment().utcOffset(timeZone * 60).format('LTS'));

    const interval = setInterval(() => {
        setTime(moment().utcOffset(timeZone * 60).format('LTS'))
    }, 1000)
    useEffect(() => {
        return clearInterval(interval)
    })

    return (
        <div className='watch'>
            <h2 className='watch__name'>{name}</h2>
            <div className='watch-box'>
                <div className='watch__delete' onClick={() => deleteWatch(id)}>&#9746;</div>
                <div className='watch-time'>{time}</div>
            </div>
        </div>
    )
}

export default Watch
