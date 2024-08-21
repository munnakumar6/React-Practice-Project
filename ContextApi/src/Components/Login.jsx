import React, { useContext, useState } from 'react'
import createuser from '../Context/Usercontext'

function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [mobile, setmobile] = useState('')

  const { setuser } = useContext(createuser)

  const handlesubmit = (e) => {
    e.preventDefault()
    setuser({ username, password, mobile })
    console.log(username)
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="">Username : </label>
          <input type="text" name="" id="username" value={username} onChange={(e) => setusername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input type="password" name="pass" id="" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Mobile : </label>
          <input type="text" name="" id="mob" value={mobile} onChange={(e) => setmobile(e.target.value)} />
        </div>
        <button onClick={handlesubmit}>submit</button>
      </form>
    </>
  )
}

export default Login