import React ,{useEffect,useState} from 'react'

function HookComponentDidMount() {

    const [state, setstate] = useState('initialState')

    useEffect(() => {
        console.log('HookComponentDidMount');
    }, [])

    const btnHandler= () =>{
            setstate('HookComponentDidMount is done')
    }

    return (
        <div>
            <button onClick={btnHandler}>HookComponentDidMount</button>
            {state}
        </div>
    )
}

export default HookComponentDidMount
