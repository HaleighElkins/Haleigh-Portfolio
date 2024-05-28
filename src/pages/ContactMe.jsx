import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function ContactMe() {
  const [formState, setFormState] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormState({
        ...formState,
        [name]: value
      });
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        if (name === "senderName" && !value.trim()) {
          setErrorMessage("Please enter your name");
        } else if (name === "senderEmail" && !validateEmail(value)) {
          setErrorMessage("Email is invalid");
        } else if (name === "senderMessage" && !value.trim()) {
          setErrorMessage("Please enter a message");
        } else {
          setErrorMessage("");
        }
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formState.senderName || !formState.senderEmail || !formState.senderMessage) {
          setErrorMessage("All fields are required.");
          return;
        }
        const mailtoLink = `mailto:mauryhughesiv@gmail.com?subject=Message from ${formState.senderName}&body=Sender's Email: ${formState.senderEmail} \nMessage: ${formState.senderMessage}`;
        window.location.href = encodeURI(mailtoLink);
        setFormState({
          senderName: "",
          senderEmail: "",
          senderMessage: ""
        });
        setErrorMessage("");
      };
      
      return (
        <div>
          <form className="form m-2" onSubmit={handleFormSubmit}>
            <h2 className="pt-2">Contact Me</h2>
            <div className="mb-3">
              <label htmlFor="senderName" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                id="senderName"
                name="senderName"
                value={formState.senderName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                type="text"
                placeholder="Please enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senderEmail" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                id="senderEmail"
                name="senderEmail"
                value={formState.senderEmail}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                type="email"
                placeholder="Please enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senderMessage" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="senderMessage"
                name="senderMessage"
                value={formState.senderMessage}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                rows="4"
                placeholder="Feel free to write me a message, I'll respond shortly!"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {errorMessage && (
            <div className="m-2">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
    }
