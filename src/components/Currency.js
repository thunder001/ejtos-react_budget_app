import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div className='alert alert-success'> Currency (
        <select name="Currency" id="Currency" className="custom-select" style={{border: 'none', color: 'green'}} onChange={event=>changeCurrency(event.target.value)}>£Pound
        <option defaultValue>£Pound</option>
        <option value="$">$Dollar</option>
        <option value="£">£Pound</option>
        <option value="€">€Euro</option>
        <option value="₹">₹Ruppee</option>
      </select>	
      {/* <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" onChange={event=>changeCurrency(event.target.value)}>Currency
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li>$Dollar</li>
            <li>$Pound</li>
            <li>€Euro</li>
            <li>₹Ruppee</li>
        </ul> */}
    )
    </div>
    );
};

export default Currency;