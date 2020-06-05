import React, { useState } from "react";
import styled from "styled-components";
import Introduction from "../components/Introduction";
import Technologies from "../components/Technologies";
import Values from "../components/Values";

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <Main>
      {step === 0 && <Introduction setStep={setStep} />}
      {step === 1 && <Technologies setStep={setStep} />}
      {step === 2 && <Values setStep={setStep} />}
    </Main>
  );
}

const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  * {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
`;
