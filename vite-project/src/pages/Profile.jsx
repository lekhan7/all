import "./allcss/profile.css"
import React, { useState,useEffect } from 'react';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from 'react-router-dom';
function ProfilePage({ start, ...props }) {

   
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState(null);
    const [profile, setProfile] = useState({});
    const [showForm, setShowForm] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
      const storedProfile = localStorage.getItem('profile');
      if (storedProfile) {
          setProfile(JSON.parse(storedProfile));
          setShowForm(false);
      }
  }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProfile = {
            name,
            email,
            age,
            address,
            bio,
            image: image ? URL.createObjectURL(image) : '',
        };
        setProfile(newProfile);
        localStorage.setItem('profile', JSON.stringify(newProfile));
        setShowForm(false);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const handleEdit = () => {
      setIsEditing(true);
      setShowForm(true);
      setName(profile.name);
      setEmail(profile.email);
      setAge(profile.age);
      setAddress(profile.address);
      setBio(profile.bio);
      setImage(null);
  };
  
 
  const handleBack = () => {
    navigate(-1);
  }

    return (
        <>
 <Button variant="secondary" onClick={handleBack} className="nav">Back</Button>
        <div className="container">
         
            {showForm && (
                <div className="profile-form">
                    <h1>Create Your Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="bio">Bio:</label>
                            <textarea
                                id="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="image">Bio Pic:</label>
                            <input
                                type="file"
                                id="image"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <button type="submit">Create Profile</button>
                    </form>
                </div>
            )}
            {!showForm && profile.name && (
                <div className="profile-page">
                    <div className="profile-header">
                        <h1>{profile.name}</h1>
                    </div>
                    <div className="profile-body">
                        <div className="profile-pic">
                            <img src={profile.image} alt="Bio Pic" />
                        </div>
                        <div className="profile-info">
                            <p>Email: {profile.email}</p>
                            <p>Age: {profile.age}</p>
                            <p>Address: {profile.address}</p>
                            <p>Bio: {profile.bio}</p>
                        </div>
                        <button onClick={handleEdit}>Edit</button>

                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default ProfilePage;