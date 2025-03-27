import { Link } from "react-router";

const MailBoxList = (props) => {
  return (
    <>
      <h2>MailBox List</h2>
      <ul>
        {props.mailBoxes.map((mailBox) => (
          <li>
            <Link to={`/mailboxes/${mailBox._id}`}>{mailBox.boxOwner}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailBoxList;
