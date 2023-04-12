import { FaPen } from "react-icons/fa";
import { AiOutlineInbox } from "react-icons/ai";
import { TiArrowForwardOutline, TiEdit } from "react-icons/ti";
import { FiTrash2 } from "react-icons/fi";

function MailNav() {
    return (
        <div className="container" >
            <div className="header" >
                <p className="newMail" > Compose  <FaPen/></p>
            </div>
            <div className="footer">
                <p> <AiOutlineInbox size={20}/> Inbox</p>
            </div>
            <div className="footer">
                <p> <TiArrowForwardOutline/> Sent</p>
            </div>
            <div className="footer">
                <p> <TiEdit/> Drafts</p>
            </div>
            <div className="footer">
                <p> <FiTrash2/> Trash</p>
            </div>
        </div>
    );
}
export default MailNav;