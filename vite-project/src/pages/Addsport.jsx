import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Country, State, City } from 'country-state-city';
import { useNavigate, useLocation } from 'react-router-dom';
import Slidebar from './Slidebar';
import "./allcss/Addsport.css"
function Addsport({ start, ...props }) {
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    country: '',
    state: '',
    city: '',
    phnumber: '',
  });
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem('entries');
    return storedEntries ? JSON.parse(storedEntries) : [];
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setStates(State.getStatesOfCountry(country.isoCode));
    setCities([]);
    setFormData({ ...formData, country: country.name });
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
    setFormData({ ...formData, state: state.name });
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setFormData({ ...formData, city: city.name });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('handleShow called');
    setShow(true);
  };

  const handleAddEntry = () => {
    if (
      !formData.name ||
      !formData.date ||
      !formData.time ||
      !formData.phnumber ||
      formData.country === "" ||
      formData.state === "" ||
      formData.city === ""
    ) {
      alert("Please fill in all fields before adding.");
      return;
    }
    if (editMode) {
    
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = formData;
      setEntries(updatedEntries);
      setEditMode(false);
      setEditIndex(null);
      alert("UPDATED SUCEFFULLY")
    } else {
      setEntries([...entries, formData]);
    }
    setFormData({
      name: '',
      date: '',
      time: '',
      phnumber: '',
      country: '',
      state: '',
      city: '',
    });
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    alert("DELETEED SUCCESSFUL")
  };

  const handleEditEntry = async (index) => {
    setEditMode(true);
    setEditIndex(index); 
    setFormData(entries[index]);
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-200">
        {start} MENU
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NAVBAR</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="custom-offcanvas-body">
           <Slidebar />
        </Offcanvas.Body>
      </Offcanvas>

      <div className="col-3 input-effect">
        
        <label  >EVENT NAME </label>
        <input
          type="text"
         className='effect-16'
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="ENTER EVENT NAME"
       required 
        />
        <label>DATE</label>
        <input
          type="date"
          name="date"
            className='effect-16'
          required
          value={formData.date}
          onChange={handleInputChange}
          placeholder="ENTER EVENT DATE"
        />
        <label>TIME</label>
        <input
          type="time"
          required
            className='effect-16'
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          placeholder="ENTER EVENT TIME"
        />
        <input
          type="number"
          required
          name="phnumber"
            className='effect-16'
          value={formData.phnumber}
          onChange={handleInputChange}
          placeholder="ENTER valed ph number"
        />
          <span class="focus-border"></span>
      </div>
      <div>
        <select
          className="form-select"
          required
          onChange={(e) =>
            handleCountryChange(
              countries.find((c) => c.isoCode === e.target.value)
            )
          }
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          disabled={!selectedCountry}
          className="form-select"
          onChange={(e) =>
            handleStateChange(
              states.find((s) => s.isoCode === e.target.value)
            )
          }
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          disabled={!selectedState || !selectedCountry}
          className="form-select"
          onChange={(e) => handleCityChange(cities.find((c) => c.name === e.target.value))}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
<div className='container-eg-btn-2'>
      <button className="button button-8" onClick={handleAddEntry}>
        {editMode ? 'Save' : 'Add'}
      </button>
</div>
      <div className="entairs">
        <h2>Entries:</h2>
        {entries.map((entry, index) => (
          <div key={index}>
            <p>
              <strong>Name:</strong> {entry.name}
            </p>
            <p>
              <strong>Date:</strong> {entry.date}
            </p>
            <p>
              <strong>Time:</strong> {entry.time}
            </p>
            <p>
              <strong>Ph-number:</strong> {entry.phnumber}
            </p>
            <p>
              <strong>Country:</strong> {entry.country}
            </p>
            <p>
              <strong>State:</strong> {entry.state}
            </p>
            <p>
              <strong>City:</strong> {entry.city}
            </p>
            <Button variant="danger" onClick={() => handleDeleteEntry(index)}>
              Delete
            </Button>
            <Button variant="warning" onClick={() => handleEditEntry(index)}>
              Edit
            </Button>
        
          </div>
        ))}
      </div>
    </>
  );
}

export default Addsport;