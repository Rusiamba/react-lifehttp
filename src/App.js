import './App.css';
import Form from "./Form";
import {useState} from "react";
import Watch from "./Watch";
import { uuid } from 'uuidv4';

function App() {
    const [watches, setWatches] = useState([])

    const addNewWatch = (name, timeZone) => {
        const newWatch = {
            id: uuid(),
            name,
            timeZone
        }
        setWatches([...watches,newWatch])
    }

    const deleteWatch = (id) => {
        const newWatches = watches.filter(e => e.id !== id);
        setWatches(newWatches)
    }

    return (
        <>
            <div className="App">
                <Form addNewWatch={addNewWatch}/>
            </div>
            <div className='watches'>
                {watches.map(e => <Watch deleteWatch={deleteWatch} key={e.id} id={e.id}
                                         name={e.name} timeZone={e.timeZone}/>)}
            </div>

        </>
    );
}

export default App;
