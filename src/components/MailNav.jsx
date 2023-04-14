import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { AiOutlineInbox } from "react-icons/ai";
import { TiArrowForwardOutline, TiEdit } from "react-icons/ti";
import { FiTrash2 } from "react-icons/fi";

function MailNav() {
    return (
        <div className="container" >
            <div className="header" >
                {/* <Link className="newMail">Compose <FaPen/></Link> */}
                <p className="newMail" > Compose  <FaPen/></p>
            </div>
            <div className="footer">
                <p id="mailp"> <AiOutlineInbox size={20}/> Inbox</p>
            </div>
            <div className="footer">
                <p id="mailp"> <TiArrowForwardOutline/> Sent</p>
            </div>
            <div className="footer">
                <p id="mailp"> <TiEdit/> Drafts</p>
            </div>
            <div className="footer">
                <p id="mailp"> <FiTrash2/> Trash</p>
            </div>
        </div>
    );
}
export default MailNav;