import React from 'react'
import { useState } from 'react'

const Form = () => {
  // states
  const [data, setdata] = useState(false)

  const [showValue, setshowValue] = useState(null)

  const handlevalue = (val) => {
    setshowValue(val.target.value)
    // setdata(false)
    console.log(val.target.value)
  }
  // validation Form
  const [user, setuser] = useState('')
  const [passwrd, setpasswrd] = useState('')
  // validation-error
  const [userErr, setuserErr] = useState(false)
  const [pswrdErr, setpswrdErr] = useState(false)

  const handleform = (e) => {
    e.preventDefault()
    // if()
    // alert('fill all the details')
  }

  const Userhandle = (e) => {
    let item = e.target.value
    console.log(item)

    if (item == '') {
      setuserErr(true)
    } else {
      setuserErr(false)
    }
  }

  // const pswrdhandle = (e) => {
  //   let item = e.target.value
  //   console.log(item)

  //   if (item == '') {
  //     setpswrdErr(true)
  //   } else {
  //     setErr(false)
  //   }
  // }

  return (
    <>
      {data ? <h1> My Name is {showValue}</h1> : false}
      <input type="text" onChange={handlevalue} />
      <button onClick={() => setdata(true)}>Submit</button>

      {/* validation form  */}
      <h1 className="mt-5  text-center "> Validation Form</h1>
      <form action="submit" className="text-center">
        <input
          type="text"
          placeholder="Username"
          name=""
          id=""
          onChange={Userhandle}
        />
        <br />
        {userErr ? <span>This Field Is Required</span> : ''} <br />
        <input type="password" placeholder="Password" />
        <br />
        <span>This Field Is Required</span> <br />
        <button type="submit" onClick={handleform} className="mt-3">
          Submit
        </button>
      </form>
    </>
  )
}

export default Form
