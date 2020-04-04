import React from 'react'
import Todoitem from './Todoitem'
import tododata from './tododata'

function App () {
    const goat = tododata.map (goat => <Todoitem key={goat.id} goat={goat}/>)
    return (
        <div className='todo'>
            {goat}
        </div>
    )
}

export default App