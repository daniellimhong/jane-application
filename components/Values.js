import React from "react";
import { WindupChildren } from "windups";
import styled from "styled-components";
import janesValues from "../src/assets/janes-values.png";

const Values = props => {
  const { setStep } = props;

  return (
    <ValuesContainer>
      <WindupChildren>
        <h2>{"I snagged this from the job description....."}</h2>
        <img src={janesValues} alt="janes values" />
        <div className="Textbox">
          <p style={{ textAlign: "center" }}>
            I believe I am a great fit because I embrace self-improvement and
            continuous learning to contribute and deliver results. <br />
            I thrive in an team environment where collaboration is valued and
            camaraderie is present. <br />
            Ultimately, I find joy in the craft of building things and seeing
            ideas come to life!
          </p>
        </div>

        <>
          <button onClick={() => setStep(1)}>Back</button>
        </>
      </WindupChildren>
    </ValuesContainer>
  );
};

export default Values;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Textbox {
    width: 20rem;
  }

  img {
    width: 25rem;
    margin-bottom: 20px;
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
