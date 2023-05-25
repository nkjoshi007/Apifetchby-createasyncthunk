import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { GetLorem } from "./store/features/lorem/loremSlice";

function App() {
  const { data } = useSelector((state) => state.Lorem);
  const dispatch = useDispatch();
  console.log("hiiii", data);
  useEffect(() => {
    dispatch(GetLorem());
  }, [dispatch, data]);
  return (
    <div>
          <h1 style={{textAlign:"center"}}>Account Details</h1>
      {data.map((items) => (
        <>
        <div className="Account_details" style={{textAlign:"center"}}>
        <label><strong>Name:</strong></label>
        <input type="text" style={{margin:"10px",border:"none"}} value={items.name}/>
        <label><strong>Email:</strong></label>
        <input type="text" style={{margin:"10px",border:"none"}} value={items.email}/>
        <label><strong>Username:</strong></label>
        <input type="text" style={{margin:"10px",border:"none"}} value={items.username}/>
        </div>
        </>
      ))}
    </div>
  );
}
export default App;
