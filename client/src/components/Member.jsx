import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { useDashboardContext } from "../pages/DashboardLayout";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Member";
import MemberInfo from "./MemberInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import moment from "moment";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";
day.extend(advancedFormat);
dayjs.extend(relativeTime);

const Member = ({
  _id,
  associationName,
  associationCode,
  memberFirstName,
  lastAndMiddleName,
  delegateRecommendation,
  memberMatriculation,
  createdAt,
  memberStatus,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  const time = dayjs(createdAt).fromNow(true);

  const { user } = useDashboardContext();
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{associationCode}</div>
        <div className="info">
          <h5>
            {memberFirstName} {lastAndMiddleName}
          </h5>
          <p>{associationName}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <MemberInfo
            title="Mat."
            icon={<MdOutlineNumbers />}
            text={memberMatriculation}
          />
          <MemberInfo
            icon={<FaCalendarAlt />}
            text={date}
            title={`(${time})`}
          />
          <MemberInfo icon={<GoCheck />} text={delegateRecommendation} />
          <div className={`status ${memberStatus}`}>{memberStatus}</div>
        </div>

        <footer className="actions">
          <Link to={`../edit-member/${_id}`} className="btn edit-btn">
            {user.role === "admin" ? "Edit Status" : "Edit Recommendation"}
          </Link>
          {user.role === "admin" ? (
            <Form method="post" action={`../delete-member/${_id}`}>
              <button type="submit" className="btn delete-btn">
                Delete
              </button>
            </Form>
          ) : null}
        </footer>
      </div>
    </Wrapper>
  );
};
export default Member;
