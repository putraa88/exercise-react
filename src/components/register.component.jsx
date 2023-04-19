import { useState } from "react"

export default function RegisterPage({ user }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    user({username, email, password});
  }
  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </>
  )
}