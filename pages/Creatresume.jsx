import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './allcss/creat.css';
import Backbtn from './Backbtn';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Education: '',
    Experience: '',
    Skills: '',
    Github: '',
    Linkedin: '',
    Achivements: '',
  });

  const [profilePic, setProfilePic] = useState(null);
  const [certImages, setCertImages] = useState([]);
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCertUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => setCertImages((prev) => [...prev, reader.result]);
      reader.readAsDataURL(file);
    });
  };

  const generatePDF = () => {
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="resume-container">
      <h1 className="title">Resume Builder</h1>

      {!showResume ? (
        <div className="form-section">
          {Object.keys(formData).map((field) => (
            <div key={field} className="input-group">
              <label>{field}</label>
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleChange}
                rows={field === 'Experience' || field === 'Skills' ? 3 : 1}
              />
            </div>
          ))}

          <div className="input-group">
            <label>Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleProfilePicUpload} />
          </div>

          <div className="input-group">
            <label>Upload Certificates</label>
            <input type="file" accept="image/*" multiple onChange={handleCertUpload} />
          </div>

          <button className="btn preview-btn" onClick={() => setShowResume(true)}>
            Preview Resume
          </button>
        </div>
      ) : (
        <div className="preview-section">
          <div ref={resumeRef} className="resume-preview slide-up">
            {profilePic && (
              <div className="profile-pic">
                <img src={profilePic} alt="Profile" />
              </div>
            )}

            <h2>{formData.Name}</h2>
            <p>{formData.Email} | {formData.Phone}</p>

            <section>
              <h3>Education</h3>
              <p>{formData.Education}</p>
            </section>

            <section>
              <h3>Experience</h3>
              <p>{formData.Experience}</p>
            </section>

            <section>
              <h3>Skills</h3>
              <p>{formData.Skills}</p>
            </section>

            <section>
              <h3>LinkedIn</h3>
              <p>{formData.Linkedin}</p>
            </section>

            <section>
              <h3>GitHub</h3>
              <p>{formData.Github}</p>
            </section>

            <section>
              <h3>Achievements</h3>
              <p>{formData.Achivements}</p>
            </section>

            {certImages.length > 0 && (
              <section>
                <h3>Certificates</h3>
                <div className="cert-grid">
                  {certImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Certificate ${idx + 1}`} />
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="btn-group">
            <button className="btn download-btn" onClick={generatePDF}>Download PDF</button>
            <button className="btn back-btn" onClick={() => setShowResume(false)}>Edit Details</button>
          </div>
        </div>
      )}
      <Backbtn />
    </div>
  );
};

export default ResumeBuilder;
