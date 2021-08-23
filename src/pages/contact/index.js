import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Layout from "../../components/Layout";
import { Container, Row, SectionInfo } from "../../global/style";
import ContactImg from "../../images/contact.png";

const Index = () => {
  return (
    <Layout>
      <Container h80>
        <section>
          <Row gap100>
            <SectionInfo>
              <img src={ContactImg} alt="get in touch" />
            </SectionInfo>
            <SectionInfo>
              <h2 className="title">Get in touch</h2>
              <p className="caption">
                If you ever have a question or a project you want
                <br />
                to work on feel free to get in touch with me
              </p>
              <ContactForm />
            </SectionInfo>
          </Row>
        </section>
      </Container>
    </Layout>
  );
};

export default Index;
