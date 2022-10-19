import { useState } from "react"

export const MyTest = () => {

    const [status, setStatus] = useState('incomplete')
    const completeTest = () => setStatus('completed')

    return (
        <div>
        <p>This test is currently {status}</p>
        <button onClick={completeTest}>Complete test</button>
        </div>
    )
}