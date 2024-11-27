import React, { useState } from 'react';
import MealSchedule from './MealSchedule';

function GuestForm() {
    const date = new Date();
    const [name,setName] = useState({
        text:"",
        id:''
    });
    const [dateCheckIn,setDateCheckIn] = useState({
        value:date
    });
    const [dateCheckout,setDateCheckout] = useState({
        value:date});
    const [list,setList] = useState([]);
    const dateCheckInChange=(e)=>{
            setDateCheckIn({
                ...dateCheckIn,
                value:e.target.value
            })
    }
    const dateCheckOutChange=(e)=>{
        setDateCheckout({
            ...dateCheckout,
            value:e.target.value
        })
    }
    const enterName = (e)=>{
        setName({
            ...name,
            text:e.target.value
        })
    }
    const addMenu=(e)=>{
        //e.preventDefault();
        let newSchedule = {
            name:name.text,
            dateCheckIn: dateCheckIn.value,
            dateCheckout:dateCheckout.value,
            id:new Date().getTime().toString()
        }
        setList([...list,newSchedule]);
        setName({
            text:"",
            id:""
        })

    }
  return (
    <>
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <input data-testid="input-guest-name" value={name.text} className="large mx-8"
                    placeholder="Guest Name" onChange={enterName}/>
                <input type="date" data-testid="input-checkin-date" value={dateCheckIn.value} className="large mx-8"
                    placeholder="Check in Date" onChange={dateCheckInChange} />
                <input type="date" data-testid="input-checkout-date" value={dateCheckout.value} className="large mx-8"
                    placeholder="Check out Date" onChange={dateCheckOutChange}/>
                <button data-testid="add-button" onClick={()=>addMenu()}>Add to Menu</button>
            </section>
            <MealSchedule meals={list}/>
        </div>
    </>
  )
}

export default GuestForm