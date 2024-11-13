import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser ] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validateDOB = (dob) => {
    const today = new Date();
    const selectedDate = new Date(dob);
    return selectedDate < today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Invalid phone number');
      return;
    }

    if (!validateDOB(dateofbirth)) {
      alert('Invalid date of birth');
      return;
    }

    alert('Form submitted successfully!');
    handleClose();
    setUser ('');
    setEmail('');
    setPhone('');
    setDateofbirth('');
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>User  Details Modal</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            alignContent: "center",
            backgroundColor: "blue",
            color: "white",
            width: "100px",
            height: "40px"
          }}
          onClick={handleOpen}>
          Open Form
        </button>
      </div>

      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            width: '60%',
            height: 'auto',
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <>
          <h1 style={{ textAlign: "center" }}>Fill Details</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'><strong>UserName:</strong></label>
            <br />
            <input
              type="text"
              id="username"
              value={user}
              onChange={(e) => setUser (e.target.value)}
              style={{ width: '90%', height: '40px', marginBottom: '10px' }}
              required
            />
            <br />
            <label htmlFor='email'><strong>Email Address:</strong></label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '90%', height: '40px', marginBottom: '10px' }}
              required
            />
            <br />
            <label htmlFor='phone'><strong>Phone Number:</strong></label>
            <br />
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '90%', height: '40px', marginBottom: '10px' }}
              required
            />
            <br />
            <label htmlFor='date'><strong>Date of Birth:</strong></label>
            <br />
            <input
              type="date"
              id="date"
              value={dateofbirth}
              onChange={(e) => setDateofbirth(e.target.value)}
              style={{ width: '90%', height: '40px', marginBottom: '10px' }}
              required
            />
            <br />
            <button
              type='submit'
              className="submit-button"
              style={{
                alignContent: "center",
                backgroundColor: "blue",
                color: "white",
                width: "100px",
                height: "40px"
              }}>
              Submit
            </button>
          </form>
        </>
      </Modal>
    </>
  );
}

export default App;