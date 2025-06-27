// import Login from "./HRloginpage";
// import React, { useState } from "react";
// import axios from "axios";
// export const Page = ({ onRegisterSuccess }) => {


//   const [formData, setFormData] = useState({
//     fullname: "",
//     region: "",
//     resume: null,
//     mob_number: "",
//     degree: ""
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setFormData({ ...formData, resume: files[0] }); // file input
//     } else {
//       setFormData({ ...formData, [name]: value }); // text inputs
//     }
//   };

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("fullname", formData.fullname);
//     data.append("region", formData.region);
//     data.append("resume", formData.resume);
//     data.append("mob_number", formData.mob_number);
//     data.append("degree", formData.degree);

//     try {
//       const res = await axios.post("http://localhost:3000/api/student", data);
//       alert(res.data.message);
//       onRegisterSuccess(); // 👈 switch to login page after registration
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form");
//     }
//   };
  

//   return (
//     <>
//       <h2 style={{ textAlign: "center", color: "#333" }}>Registration Form</h2>
//       <form onSubmit={handleSubmit} style={{
//         maxWidth: "400px",
//         margin: "auto",
//         backgroundColor: "#fff",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 0 10px rgba(0,0,0,0.1)"
//       }}>
//         <label>Full Name:</label>
//         <input type="text" name="fullname" onChange={handleChange} required />

//         <label>Region:</label>
//         <input type="text" name="region" onChange={handleChange} required />

//         <label>Upload Resume:</label>
//         <input type="file" name="resume" onChange={handleChange} required />

//         <label>Mobile Number:</label>
//         <input type="tel" name="mob_number" onChange={handleChange} required />

//         <label>Degree:</label>
//         <input type="text" name="degree" onChange={handleChange} required />

//        <input type="submit" value="Register" />
//       </form>
//     </>
//   );


// };



import Login from "./HRloginpage";
import React, { useState } from "react";
import axios from "axios";

export const Page = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    region: "",
    resume: null,
    mob_number: "",
    degree: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("region", formData.region);
    data.append("resume", formData.resume);
    data.append("mob_number", formData.mob_number);
    data.append("degree", formData.degree);

    try {
      const res = await axios.post("http://localhost:3000/api/student", data);
      alert(res.data.message);
      onRegisterSuccess();
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <>
      <h2 style={{
        textAlign: "center",
        color: "#333",
        marginTop: "30px",
        fontFamily: "Segoe UI, sans-serif"
      }}>Registration Form</h2>

      <form onSubmit={handleSubmit} style={{
        maxWidth: "450px",
        margin: "30px auto",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        fontFamily: "Segoe UI, sans-serif"
      }}>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Full Name:</label>
        <input type="text" name="fullname" onChange={handleChange} required
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Region:</label>
        <input type="text" name="region" onChange={handleChange} required
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleChange} required
          style={{ width: "100%", marginBottom: "20px", borderRadius: "6px" }} />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Mobile Number:</label>
        <input type="tel" name="mob_number" onChange={handleChange} required
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Degree:</label>
        <input type="text" name="degree" onChange={handleChange} required
          style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="submit" value="Register"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={e => e.target.style.backgroundColor = "#45a049"}
          onMouseOut={e => e.target.style.backgroundColor = "#4CAF50"}
        />
      </form>
    </>
  );
};