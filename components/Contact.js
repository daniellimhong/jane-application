import React from "react";
import { WindupChildren } from "windups";
import styled from "styled-components";

const Contact = props => {
  const { setStep, urls } = props;

  return (
    <WindupChildren>
      <IntroContainer>
        <h1>{"Hello, my name is Daniel Hong!"}</h1>
        <h2>{"I am a full-stack engineer and lifelong learner!"}</h2>
        <img src={urls.portrait} alt="portrait" />
        <h2>{"⬆️ This is my family-to-be right there ⬆️"}</h2>
        <button onClick={() => setStep(1)}>Continue</button>
      </IntroContainer>
    </WindupChildren>
  );
};

export default Contact;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 18rem;
    border-radius: 50px;
    animation: fadeIn ease 2s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
