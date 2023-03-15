import { AiOutlineMail } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./ContactDetails.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";

const ContactDetails = () => {
  return (
    <div className={classes.contactDetails}>
      <div className={classes.contact}>
        <div className={classes.call}>
          <MdCall />
          <Link to="+2348073946451">+2348073946451</Link>
        </div>
        <div className={classes.mail}>
          <AiOutlineMail />
          <a href={+2348073946451}>Mustaphafarouk41@gmail.com</a>
        </div>
      </div>
      <ul className={classes.details}>
        <li>
          <Link to="www.facebook">
            <GrFacebook />
          </Link>
          <Link to="https://twitter.com/Faroukayo24">
            <BsTwitter />
          </Link>
          <Link to="https://www.linkedin.com/in/mustapha-farouk-441a20214/">
            <BsLinkedin />
          </Link>

          <div>
            <p>EN</p> <RiArrowDropDownFill />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ContactDetails;
