import {useState} from "react";

const Form = ({addNewWatch}) => {
    const [name, setName] = useState('');
    const [timeZone, setTimeZone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewWatch(name, timeZone)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className='label'>
                Название
                <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className='label'>
                Временная зона
                <input className='input' type="text" value={timeZone} onChange={(e) => setTimeZone(e.target.value)}/>
            </label>
            <input className='button' type="submit" value="Добавить"/>
        </form>
    )
}

export default Form
