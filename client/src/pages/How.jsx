import Wrapper from "../assets/wrappers/HomePage";
import { Badge } from "react-bootstrap";

const How = () => {
  return (
    <Wrapper>
      <h2 className="form-title">How It Works:</h2>
      SAGI is not an insurance, more than an insurance, SAGI is an
      implementation of what we hold dear in africa, hospitality and solidarity,
      SAGI is 100% financed by members and sympathizers donations, and the
      associations members ares required by definition to mutually help each
      other, that is why it is called
      <span className="status-title"> Active Solidarity. </span>
      <h4>
        <Badge color="red" pill bg="success" className="badge">
          1. The Association is member and list submitted
        </Badge>
      </h4>
      <p>
        If your association is an association member of SAGI, and the member
        list has already been received and recognized as such by SAGI
        administration, one delegate can sign up to the this web application
        <span className="status-title"> (active-solidarity.com) </span> and
        register his association's members, and each individual member will
        received the status of <span className="status-title">pending </span>
        which will be changed withing 24 to 48 hours to
        <span className="status-title"> vested </span>, in this status, all
        individual vested members are entitled to the death benefit, which is
        the only benefit obtained by SAGI members at this time. From this point,
        the delegate can then proceed to add, withdraw or transfer members right
        on his dashboard witch is also the association's dashboard.
      </p>
      <br />
      <p>
        During the<span className="status-title"> pending </span> or
        <span className="status-title"> waiting </span> or any other status
        other than <span className="status-title"> vested </span> no members is
        eligible for benefit.
      </p>
      <h4>
        <Badge color="red" pill bg="success" className="badge">
          2. The Association is member but no list submitted
        </Badge>
      </h4>
      <p>
        If your association is an association member of SAGI, and the list of
        members has not been received by SAGI administration yet, the delegate
        can still register the members but their status will remain
        <span className="status-title"> pending </span> until they send their
        list to SAGI administration witch will then proceed to change the
        members status to vested withing 24 to 48 hours to
        <span className="status-title"> vested. </span>From this point, the
        delegate can then proceed to add, withdraw or transfer members right on
        his dashboard witch is also the association's dashboard.
      </p>
      <br />
      <p>
        During the<span className="status-title"> pending </span> or
        <span className="status-title"> waiting period</span> or any other
        status than <span className="status-title"> vested </span> no members is
        eligible for benefit.
      </p>
      <h4>
        <Badge color="red" pill bg="success" className="badge">
          3. The Association has returning members:
        </Badge>
      </h4>
      <p>
        <span className="status-title"> Returning members </span> who didn't
        participate to the April 2023 contribution can be registered, no
        question asked, but their status will remain
        <span className="status-title"> pending </span> or
        <span className="status-title"> waiting status</span> until they purge
        their 3 months waiting period and pay their registration fee.
      </p>
      <p>
        After the first contribution of this administration,
        <span className="status-title"> Returning members </span> who did
        participate to the April 2023 contribution can be registered, no
        question asked, but their status will remain
        <span className="status-title"> pending </span> or
        <span className="status-title"> waiting </span> until they purge their 3
        months waiting period and pay their registration fee, and pay for any
        contribution they've missed.
      </p>
      <br />
      <p>
        During the<span className="status-title"> pending </span> or
        <span className="status-title"> waiting period</span> or any other
        status than <span className="status-title"> vested </span> no members is
        eligible for benefit.
      </p>
      <h4>
        <Badge color="red" pill bg="success" className="badge">
          4. New Associations
        </Badge>
      </h4>
      <p>
        After filling up<span> </span>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScRb0Yq_lP_qYG59rq-7S3tE7rMSeyz-EzdNMcLwrGJLtJ_aw/viewform?usp=sf_link">
          SAGI Introductory Form
        </a>
        <span>, </span>
        one delegate can register the group or association and its members who
        will remain <span className="status-title"> pending </span> until they
        pay their registration fees or get removed after 7 days of
        <span className="status-title"> pending status</span> when the
        registration fees are paid, the members will continue in the
        <span className="status-title"> waiting status </span> until they reach
        90 days after the registration.
      </p>
      <br />
      <p>
        During the<span className="status-title"> pending </span> or
        <span className="status-title"> waiting period</span> or any other
        status than <span className="status-title"> vested </span> no members is
        eligible for benefit.
      </p>
    </Wrapper>
  );
};
export default How;
