import styled from "styled-components";
import { useState } from "react";
import data from "../utils/data";
import { Contact, Question } from "../components";
import { BsTelephone, BsGlobe } from "react-icons/bs";
import { AiOutlineMail, AiOutlineForm } from "react-icons/ai";

const Contacts = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <Wrapper>
      <div className="container">
        <div>
          <BsTelephone size={40} color="var(--primary-500)" />
        </div>
        <h4>443-531-5852/ 301-512-3919 / 240-821-0366</h4>
      </div>
      <div className="container">
        <div>
          <AiOutlineMail size={40} color="var(--primary-500)" />
        </div>
        <h4>info@active-solidarity.com</h4>
      </div>
      <div className="container">
        <div>
          <BsGlobe size={40} color="var(--primary-500)" />
        </div>
        <h4>active-solidarity.com</h4>
      </div>
      <div className="container">
        <div>
          <AiOutlineForm size={40} color="var(--primary-500)" />
        </div>
        <h4>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScRb0Yq_lP_qYG59rq-7S3tE7rMSeyz-EzdNMcLwrGJLtJ_aw/viewform?usp=sf_link">
            SAGI Introductory Form
          </a>
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 1rem 2rem 2rem;
  line-height: 1.5rem;

  main {
    min-height: 100vh;
    /*using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 50vw;
    margin: 1rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 1rem 1rem;
    width: 100%;
    /* max-width: var(--fixed-width); */
    display: grid;
    gap: 1rem 1rem;
    box-shadow: var(--light-shadow);
  }
  .container h4 {
    line-height: 1.2;
    font-weight: 500;
    color: #349feb;
  }
  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 100px 1fr;
    }
  }
  .question {
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-grey-special);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }
  .question h4 {
    text-transform: none;
    line-height: 1.5;
    color: var(--primary-500);
  }
  .question p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: orange;
  }
  .question header h4 {
    margin-bottom: 0;
  }
`;
export default Contacts;
