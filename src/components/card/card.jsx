import "./card.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

const Card = ({ name, role, email, address, phone }) => {
  return (
    <div className="card">
      <div className="card-header">
        {name}
        <CreateIcon className="update" />
        <DeleteIcon className="delete" />
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
