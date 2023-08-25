import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main3.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            an <span>active</span> solidarity
          </h1>
          <p>
            This is an extension of the solidarity that we know back home, where
            one person's problem becomes the community's problem; cameroonians
            registered to SAGI get together to take care of their fallen sister
            or brother without breaking the bank.
          </p>
          <Link to="/home" className="btn explore-link">
            explore
          </Link>
          <Link to="/login" className=" btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
