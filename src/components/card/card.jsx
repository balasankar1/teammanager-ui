import "./card.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";

import { Link } from "react-router-dom";

const Card = ({ id, name, role, email, address, phone }) => {
  const handleDeleteMember = async () => {
    const token = sessionStorage.getItem("userToken");
    try {
      await axios.delete(`http://localhost:3300/api/member/delete/${id}`, {
        headers: { authorization: `${token}` },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };
  return (
    <div className="card1">
      <div className="card-header">
        {name}
        <Link to={`/update?m_id=${id}`}>
          <CreateIcon className="update" />
        </Link>
        <DeleteIcon className="delete" onClick={handleDeleteMember} />
      </div>

      <div className="card-body">
        <div>Email:{email}</div>
        <div>Role:{role}</div>
        <div>Address:{address}</div>
        <div>Phone Number:{phone}</div>
      </div>
    </div>
  );
};

export default Card;
