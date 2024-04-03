import React, { useState } from "react";
 import "./App.css"

export default function App() {
  const [formData, setFormData] = useState([{ lname: "", lemail: "",lmobile_no:"",lgender:"" }]);
  const [fdata, setFdata] = useState([
    { lname: "mife",  lemail: "m@gamil.com",lmobile_no:"877884598",lgender:"male" },
  ]);

  const addRow = () => {
    setFormData([...formData, { lname: "", lemail: "", lmobile_no: "", lgender: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const updatedData = [...formData];
    updatedData[i][name] = value;
    setFormData(updatedData);
  };

  const deleteRow = (i) => {
    const updatedData = [...formData];
    updatedData.splice(i, 1);
    setFormData(updatedData);
  };

  const submitForm = () => {
    setFdata([...fdata, ...formData]);
    setFormData([{ lname: "", lemail: "", lmobile_no: "", lgender: "" }]);

  };

  return (
    <div className="App">
<table className="customTable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Gmail</th>
            <th>Mobile no</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {formData.map((val, i) => (
        <tr key={i}>
<th>
          <input
          type="text"

            name="lname"
            value={val.lname}
            onChange={(e) => handleChange(e, i)}
          />
          </th>
          <th>
          <input
          type="email"
            name="lemail"
            value={val.lemail}
            onChange={(e) => handleChange(e, i)}
          />
          </th>
          <th>
          <input
          type="number"
            name="lmobile_no"
            value={val.lmobile_no}
            onChange={(e) => handleChange(e, i)}
          />
          </th> 
           <th>
          <input
          type="text"
            name="lgender"
            value={val.lgender}
            onChange={(e) => handleChange(e, i)}
          />
          </th>
          <th>
          <button onClick={addRow}>Add</button>
          <button onClick={() => deleteRow(i)}>Delete</button>
          </th>
        </tr>
      ))}
        </tbody>
        </table>
    
      <button onClick={submitForm}>Submit</button>
      <br />
      <h1>List of above submitted data</h1>
      <table className="customTable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>email</th>
            <th>Mobile no</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {fdata.map((val, i) => (
            <tr key={i}>
              <td>{val.lname}</td>
              <td>{val.lemail}</td>
              <td>{val.lmobile_no}</td>
              <td>{val.lgender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
