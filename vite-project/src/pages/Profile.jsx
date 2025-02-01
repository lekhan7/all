import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useFirebase } from "../context/firebase";
import "C:/Users/acer/Desktop/secure share gov doc web/vite-project//src/allcss/profile.css"
const ProfilePage = () => {
  const [email, setEmail] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).email : "";
  });

  const [name, setName] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).name : "";
  });

  const [age, setAge] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).age : "";
  });

  const [gender, setGender] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).gender : "";
  });

  const [country, setCountry] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).country : "";
  });

  const [image, setImage] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).image : null;
  });

  const [preview, setPreview] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData).preview : false;
  });

  const [profileData, setProfileData] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    const data = {
      email,
      name,
      age,
      gender,
      country,
      image,
      preview,
    };
    setProfileData(data);
    localStorage.setItem("profileData", JSON.stringify(data));
  }, [email, name, age, gender, country, image, preview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const handleEdit = () => {
    setPreview(false);
    setEmail("");
    setName("");
    setAge("");
    setGender("");
    setCountry("");
    setImage("");
  };
  const navigate = useNavigate();
  const firebase = useFirebase();
  const handellogout = async (e) =>{
     
    e.preventDefault();
    alert("logout a user")
  const result = await firebase.signoutuser();
    alert("done",result)
    navigate("/regester")
}
  return (
    <div className="container">
      <h1>Profile Page</h1>
      {preview || (name && email && age && gender && country && image) ? (
        <div>
        
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>Profile Picture:</strong>
          </p>
          {image && <img src={image} alt="Profile" style={{ width: "200px", height: "200px" }} />}
          <button
            type="button"
            onClick={handleEdit}
         className="edit"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div>
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              style={{ marginLeft: "10px" }}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div>
            <label>Profile Picture:</label>
            <input
              type="file"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              required
              style={{ marginLeft: "10px" }}
            />
          </div>
          <button type="submit" >
            Submit
          </button>

        </form>
      )}
      <button className="logout" onClick={handellogout}>Log Out </button>
    </div>
  );
};

export default ProfilePage;