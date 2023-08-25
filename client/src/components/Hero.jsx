import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/images/africa.jpg";
import heroBcg2 from "../assets/images/kids.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>SAGI Mission:</h1>
        <p>
          It is true that we are witnessing a race for enrichment across the
          country, by similar groups, some to prepare for their retirement,
          others to ensure the future of their children, but we at SAGI we
          believe that we must go back to basics, our organization must return
          to its initial mission, which brought joy to the faces of many
          Cameroonians by organizing our member associations so that when a
          family is struck by the death of one of its Members, we get together,
          provide the necessary funds to bury the love one. We understand the
          needs for a budget to run an organization, but when the monthly
          “administrative fees” exceed the benefit that we must pay to the
          family, it becomes a bit problematic.
        </p>
        {/* <Link to="/products" className="btn hero-btn">
          shop now
        </Link> */}
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 90vh;
  display: grid;
  place-items: center;
  margin-bottom: 5rem;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem 0;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-weight: bolder;
      color: var(--primary-400);
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
