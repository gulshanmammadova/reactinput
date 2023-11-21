import React from 'react'
import './Feedback.css'

const Feedback = () => {
    const clickedForm=()=>{
        alert('Successfully Sended !!!')
    }
  return (
    <div>
      <form action="" onSubmit={clickedForm}>
      <label htmlFor="name" >Name</label>
      <input type="text" name="" id="name" placeholder='Enter Your Name...' required/>
      <label htmlFor="surName">Surname</label>
      <input type="text" name="" id="surName" placeholder='Enter Your Surname...' required/>
      <label htmlFor="phone">Phone</label>
      <input type="text" name="" id="phone"  placeholder='(+994)**-***-**-**'/>  
      <label htmlFor="email">Email</label>
      <input type='email' name="" id="email"  placeholder='Enter Your Email...'/> 
      <label htmlFor="area">Opinion</label>
      <textarea name="" id="area" cols="30" rows="10" placeholder='Enter Your Message...'></textarea>
      <button >Send</button>
      </form>

    </div>
  )
}

export default Feedback
