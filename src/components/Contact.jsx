import React from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Your message has been sent!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="project-page" id="contact">
        <div className="container">
          <h1>Contact</h1>
          <p>Have a project in mind? Leave me a message!</p>
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Message:
                <textarea
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
