import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/actions/user.action";

const User = () => {
  const dispatch = useDispatch();

  // local state
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  // global state
  const users = useSelector(state => state.userReducer.users);

  // local functions
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id, name }));
  }
  return (
    <>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">id</label>
          <input onChange={e => setId(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">name</label>
          <input onChange={e => setName(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      {
        users.map(i => 
          <>
            <h6>{i.id}</h6>
            <br></br>
            <h6>{i.name}</h6>
            <br></br>
          </>
        )
      }
    </>
  )
}

export default User;