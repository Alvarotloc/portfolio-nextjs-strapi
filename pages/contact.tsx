import emailjs from "emailjs-com";
import { useState } from "react";
import Layout from "../components/Layout";
const contact = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if ([name, email, message].includes("")) {
      return setError(true);
    }
    setError(false);
    emailjs
      .sendForm(
        "service_lmjp1ug",
        "template_ql9muco",
        e.target,
        "lefJdBxno__jgOd8Y"
      )
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setEmail("");
          setMessage("");
          setName("");
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout page="Contact">
      <section id="contact">
        <h1>Contact Me</h1>
        {error && <p id="error">All the fields are required</p>}
        {success && <p id="success">Email sent successfully</p>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Insert Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Insert Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Insert Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input type="submit" value="Send Message" />
          </fieldset>
        </form>
      </section>
    </Layout>
  );
};

export default contact;
