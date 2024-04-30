import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({
    firstname:"", lastname:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments: false, candidates: false, offers: false, pushNotifications:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;

    setformData((prev) => ({...prev, [name]:type === "checkBox" ? checked: value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }
  return (
    <div className='flex flex-col items-center mt-2'>

      <form onSubmit={submitHandler}>

      <label htmlFor='firstname'>First name</label><br/>
        <input
          type='text'
          name='firstname'
          id='firstname'
          placeholder='Priyanshu'
          value={formData.firstname}
          onChange={changeHandler}
          className='outline'
        />

        <br/><label htmlFor='lastname'>Last name</label> <br/>
        <input
          type='text'
          name='lastname'
          id='lastname'
          placeholder='Singh'
          value={formData.lastname}
          onChange={changeHandler}
          className='outline'
        />

        <br/><label htmlFor='email'>Email address</label> <br/>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Enter your email'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />

        <br/><label htmlFor='country'>Country</label><br/>
        <select
        id='country'
        name='country'
        value={formData.country}
        onChange={changeHandler}
        className='outline'
        >
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Switzerland</option>
        </select>

        <br/><label htmlFor='streetAddress'>Street Address</label> <br/>
        <input
          type='text'
          name='streetAddress'
          id='streetAddress'
          placeholder='Address'
          value={formData.streetAddress}
          onChange={changeHandler}
          className='outline'
        />

        <br/><label htmlFor='city'>City</label> <br/>
        <input
          type='text'
          name='city'
          id='city'
          placeholder='Enter your city'
          value={formData.city}
          onChange={changeHandler}
          className='outline'
        />

        <br/><label htmlFor='state'>State</label> <br/>
        <input
          type='text'
          name='state'
          id='state'
          placeholder='Enter your state'
          value={formData.state}
          onChange={changeHandler}
          className='outline'
        />

        <br/><label htmlFor='postalCode'>Postal Code</label> <br/>
        <input
          type='text'
          name='postalCode'
          id='postalCode'
          placeholder='394230'
          value={formData.postalCode}
          onChange={changeHandler}
          className='outline'
        />

        <fieldset>
          <legend>By Email</legend>

          <div className='flex'>

            <input
              id='comments'
              name='comments'
              type='checkbox'
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex'>

            <input
              id='candidates'
              name='candidates'
              type='checkbox'
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidate apply for a job.</p>
            </div>
          </div>

          <div className='flex'>

            <input
              id='offers'
              name='offers'
              type='checkbox'
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when a candidate accept or reject an offer. </p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotifications'
            value="everything"
            onChange={changeHandler}
          />

          <label htmlFor='pushEverything'>Everything</label><br/>

          <input
            type='radio'
            id='pushEmail'
            name='pushNotifications'
            value="same as email"
            onChange={changeHandler}
          />

          <label htmlFor='pushEmail'>Same as email</label><br/>

          <input
            type='radio'
            id='pushNothing'
            value="No push Notifications"
            name='pushNotifications'
            onChange={changeHandler}
          />

          <label htmlFor='pushNothing'>No push Notifications</label><br/>

        </fieldset>

        <button
        className='bg-blue-500 text-white font-bold rounded py-2 px-4'>
        Save
        </button>

      </form>

    </div>
  );
}

export default App;
