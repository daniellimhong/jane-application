import React from "react";
import { WindupChildren } from "windups";
import styled from "styled-components";
import { urls } from "../config/urls";

const Technologies = props => {
  const { setStep } = props;

  return (
    <WindupChildren>
      <TechContainer>
        <h2>{"My go-to stack!"}</h2>
        <img src={urls.javascript} alt="javascript" />
        <img src={urls.react} alt="react" />
        <img src={urls.node} alt="node" />
        <img src={urls.postgres} alt="postgres" />
        <p>Wait! There's definitely more to that list!</p>
        <p>
          Check{" "}
          <a href={urls.resume} target="_blank" rel="noopener noreferrer">
            this
          </a>{" "}
          out to get a full list
        </p>
        <>
          <button onClick={() => setStep(2)}>Continue</button>
          <button onClick={() => setStep(0)}>Back</button>
        </>
      </TechContainer>
    </WindupChildren>
  );
};

export default Technologies;

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  img {
    width: 15vw;
    height: 15vh;
    min-width: 150px;
    margin: 1em 0;
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
