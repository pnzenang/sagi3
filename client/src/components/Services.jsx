import React from "react";
import { GenIcon } from "react-icons/lib";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            The Solidarity in action,
            <br />
            Be part of the history!
          </h3>
          <h6>
            Amongst the panoply of organizations that follow you even in your
            bedrooms, remember that SAGI wants to be the "public option",
            created and maintained to serve the cameroonian Communities, not to
            serve ourselves, the organization that showed the way and will
            continue to serve the Cameroonians is coming back with many reforms
            to adapt to the time while going back to the fundamentals.
          </h6>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* margin-top: 10rem; */

  h3 {
    color: var(--primary-500);
    margin: 1rem 0;
  }

  h4 {
    color: var(--primary-200);
    margin: 1rem 0;
  }
  /* padding: 5rem 0; */

  background: var(--clr-primary-10);

  .header h3 {
    margin: 3rem 0;
    font-weight: bolder;
  }
  h6 {
    margin-bottom: 0;
    line-height: 2;
    color: var(--primary-400);
  }
  .services-center {
    margin-top: 1rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--primary-600);
    text-align: center;
    padding: 2rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
      font-size: 90%;
      line-height: 1.8;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--primary-300);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
