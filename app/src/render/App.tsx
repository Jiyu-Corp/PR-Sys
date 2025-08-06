import logo from './assets/logo.png'
import './App.css'
import { MouseEvent } from 'react';

const { access } = window.electron

function App() {

    async function handleForgotPassword(evt: MouseEvent) {
        evt.stopPropagation();
        console.log(await access.forgotPassword());
    }

    return (
        <>
            <h1>EPK</h1>
            <h1>Test2</h1>
            <button onClick={handleForgotPassword}>Test forgot password</button>
        </>
    )
}

export default App
