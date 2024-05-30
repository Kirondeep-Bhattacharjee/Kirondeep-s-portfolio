import styled from 'styled-components';
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models/Fox.jsx";
import useAlert from "../hooks/useAlert.js";
import Loader from "../components/Loader.jsx";
import Alert from "../components/Alert.jsx";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  max-width: 1200px;
  margin: auto;
  position: relative;
  margin-top: 8rem;
`;

const FormContainer = styled.div`
  flex: 1;
  min-width: 50%;
  display: flex;
  flex-direction: column;
`;

const HeadText = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: #1a202c;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 3.5rem;
`;

const Label = styled.label`
  color: #4a5568;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  color: #2d3748;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  color: #2d3748;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  background: #2b77e7;
  color: white;
  text-align: center;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 640px) {
    width: 100%;
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
  height: 350px;
  @media (min-width: 768px) {
    height: 550px;
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kirondeep",
          from_email: form.email,
          to_email: "kiranbattacharji123@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <Section>
      {alert.show && <Alert {...alert} />}

      <FormContainer>
        <HeadText>Get in Touch</HeadText>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter your name here"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="youremail.@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Label>
          <Label>
            Your Message
            <Textarea
              name="message"
              rows="4"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Label>

          <Button type="submit" disabled={loading} onFocus={handleFocus} onBlur={handleBlur}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Form>
      </FormContainer>

      <CanvasContainer>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </Section>
  );
};

export default Contact;
