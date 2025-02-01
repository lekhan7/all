import React, { useState, useEffect } from "react";
import email from "C:/Users/acer/Desktop/secure share gov doc web/email.jpg"
import facebook from "C:/Users/acer/Desktop/secure share gov doc web/facebook.jpg"
import wats from "C:/Users/acer/Desktop/secure share gov doc web/wats.jpg"
import tewwet from "C:/Users/acer/Desktop/secure share gov doc web/tewwet.jpg"
import "C:/Users/acer/Desktop/secure share gov doc web/vite-project/src/allcss/share.css"
const Share = () => {
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [shareLink, setShareLink] = useState("");

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

  const handleSelectDocument = (document) => {
    setSelectedDocument(document);
  };

  const handleShare = (platform) => {
    if (selectedDocument) {
      const documentName = selectedDocument.split(" - ")[2];
      const documentLink = `https://example.com/${documentName}`;
      setShareLink(documentLink);

      switch (platform) {
        case "gmail":
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=&su=Shared+Document&body=${documentLink}`, "_blank");
          break;
        case "whatsapp":
          window.open(`https://wa.me/?text=${documentLink}`, "_blank");
          break;
        case "facebook":
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${documentLink}`, "_blank");
          break;
        case "twitter":
          window.open(`https://twitter.com/intent/tweet?url=${documentLink}`, "_blank");
          break;
        default:
          break;
      }
    } else {
      alert("Please select a document to share.");
    }
  };

  return (
    <div className="container">
      <h1>Share Uploaded Documents</h1>
      <div style={styles.documents}>
        {uploadedDocuments.length > 0 ? (
          uploadedDocuments.map((document, index) => (
            <div key={index} style={styles.documentCard}>
              <p>{document}</p>
              <button onClick={() => handleSelectDocument(document)} className="select">
                Select
              </button>
            </div>
          ))
        ) : (
          <p>No documents uploaded yet.</p>
        )}
      </div>
      {selectedDocument && (
        <div style={styles.shareOptions}>
          <h2>Share Options</h2>
          <button  onClick={() => handleShare("gmail")} className="email">
            Gmail <br></br><img className="icon" src={email} />
          </button>
          <button  onClick={() => handleShare("whatsapp")} className="wtas">
            WhatsApp<img className="icon" src={wats} />
          </button >
          <button  onClick={() => handleShare("facebook")} className="face">
            Facebook <img className="icon" src={facebook} />
          </button >
          <button  onClick={() => handleShare("twitter")} className="tewwet">
            Twitter <br></br> <img className="icon" src={tewwet} />
          </button >
        </div>
      )}
      {shareLink && (
        <div style={styles.shareLink}>
          <p>Share Link: {shareLink}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  documents: {
    marginBottom: "20px",
  },
  documentCard: {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  selectButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  shareOptions: {
    marginTop: "20px",
  },
  shareButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  shareLink: {
    marginTop: "20px",
  },
};

export default Share;