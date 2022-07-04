import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import ReactDom from 'react-dom'
import './styles.css'

let myBday = new Date('09/19/2023 00:00 AM');
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

function ShowRemainingDays() {
    const [days, setDays] = useState(new Date())
    let distance;

    setInterval(function() {
        let now = new Date()
        distance = myBday - now

        setDays(Math.floor(distance / day))
    }, 1000)

    function Show () {
        if (days >= 0) {
            return (<h1>{`${days} days,`}</h1>)
        }
    }

    return <Show/>
}

function ShowRemainingHours() {
    const [hours, setHours] = useState(new Date())
    let distance;

    setInterval(function() {
        let now = new Date()
        distance = myBday - now

        setHours(Math.floor((distance % day) / hour))
    }, 1000)

    function Show () {
        if (hours >= 0) {
            return (<h1>{`${hours} ${hours == 1? 'hour,': 'hours,'}`}</h1>)
        }
    }
    
    return <Show/>
}

function ShowRemainingMinutes() {
    const [minutes, setMinutes] = useState(new Date())
    let distance

    setInterval(function() {
        let now = new Date()
        distance = myBday - now

        setMinutes(Math.floor((distance % hour) / minute))
    }, 1000)
    
    function Show () {
        if (minutes >= 0) {
            return (<h1>{`${minutes} minutes,`}</h1>)
        }
    }

    return <Show/>
}

function ShowRemainingSeconds() {
    const [seconds, setSeconds] = useState(new Date())
    let distance

    setInterval(function() {
        let now = new Date()
        distance = myBday - now

        setSeconds(Math.floor((distance % minute) / second))
    }, 1000)
    
    function Show () {
        if (seconds >= 0) {
            return (
                <>
                    <h1>
                        {`${seconds} seconds`}
                    </h1>
                    <h1>
                        till I turn 18.
                    </h1>
                </>
            )
        }
    }

    return <Show/>
}

function ShowRemainingTime() {
  return(
    <>
        <ShowRemainingDays/>
        <ShowRemainingHours/>
        <ShowRemainingMinutes/>
        <ShowRemainingSeconds/>
    </>
  )
}

function RenderEmail() {
    const [showEmailInput, setShowEmailInput] = useState(true)

    setInterval(function() {
        let now = new Date()
        let distance = myBday - now

        let days = Math.floor(distance / day);
        let hours = Math.floor((distance % day) / hour);
        let minutes = Math.floor((distance % hour) / minute);
        let seconds = Math.floor((distance % minute) / second);

        setShowEmailInput((days + hours + minutes + seconds) > 0)
    }, 1000)

    const submitEmailHandler = async (event) => {
        event.preventDefault();
        const email = event.target[0].value

        toast(email + " added!\n(doesn't actually work)")
    }

    function EmailInputForm() {
        const [input, setInput] = useState('');

        return (
            <div className="form">
                <form onSubmit={submitEmailHandler}>
                    <h3>Add your email to be notified when I turn 18!</h3>
                    <input type='text' name='email' placeholder="exampleEmail@email.com" value={input} onInput={e => setInput(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

    if (showEmailInput) {
        return (
            <>
                <EmailInputForm/>
                <ToastContainer/>
            </>
        )
    } else {
        return (
            <h1>
                I'm 18!
            </h1>
        )
    }
}

ReactDom.render(<RenderEmail/>, document.getElementById('email'));
ReactDom.render(<ShowRemainingTime/>, document.getElementById('countdown'));