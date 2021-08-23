import React from "react";
import { FormContainer, InputField, InputGroup, TextArea } from "./style";

const ContactForm = () => {
  return (
    <FormContainer>
      <form>
        <InputGroup>
          <InputField type="text" placeholder="Full name" required />
          <InputField type="text" placeholder="Subject" required />
        </InputGroup>
        <InputField type="email" placeholder="Email" required />
        <TextArea rows="3" placeholder="Message..." />
        <button type="submit">Send</button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
