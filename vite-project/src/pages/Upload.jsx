import React, { useState, useEffect } from "react";
import "C:/Users/acer/Desktop/secure share gov doc web/vite-project/src/allcss/upload.css"
const App = () => {
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedDocuments = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("document")) {
        storedDocuments.push(localStorage.getItem(key));
      }
    }
    setUploadedDocuments(storedDocuments);
  }, []);

  // Save data to localStorage whenever uploadedDocuments changes
  useEffect(() => {
    const storedDocuments = {};
    uploadedDocuments.forEach((document, index) => {
      storedDocuments[`document${index}`] = document;
    });
    Object.keys(storedDocuments).forEach((key) => {
      localStorage.setItem(key, storedDocuments[key]);
    });
  }, [uploadedDocuments]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a valid PDF file.");
      setFile(null);
    }
  };

  const handleUpload = () => {
    if (id && type && file && username) {
      const documentDetails = `${id} - ${type} - ${file.name} - ${username}`;
      setUploadedDocuments([...uploadedDocuments, documentDetails]);
      setId("");
      setType("");
      setFile(null);
      setUsername("");
    } else {
      alert("Please fill all fields and select a PDF file.");
    }
  };

  const handleDelete = (index) => {
    const storedDocuments = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("document")) {
        storedDocuments.push(localStorage.getItem(key));
      }
    }
    storedDocuments.splice(index, 1);
    localStorage.clear();
    storedDocuments.forEach((document, index) => {
      localStorage.setItem(`document${index}`, document);
    });
    setUploadedDocuments(storedDocuments);
  };

  return (
    <div className="maincontainer" >
      <h1>Upload PDF Document</h1>
      <div style={styles.form}>
        <input
          type="number"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
    required
        />
        <select
          type="text"
          placeholder="Enter Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
     required
        >
          <option>Select the type</option>
          <option>Adhar card</option>
          <option>Ration card</option>
          <option>Income tax certificate</option>
          <option>Caste certificate</option>
          <option>Marks card</option>
          <option>Others</option>
        </select>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
   required
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
required
        />
        <button onClick={handleUpload}  >
          Upload
        </button>
      </div>

      <div style={styles.uploadedDocuments}>
        <h2>Uploaded Documents</h2>
        {uploadedDocuments.length > 0 ? (
          uploadedDocuments.map((doc, index) => (
            <div key={index} style={styles.documentCard}>
              <p>{doc}</p>
              <button
                onClick={() => handleDelete(index)}
          
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No documents uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  uploadedDocuments: {
    marginTop: "20px",
  },
  documentCard: {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    position: "relative",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
};

export default App;