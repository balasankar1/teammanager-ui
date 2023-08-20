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
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Phone Number:</strong> {phone}
        </p>
      </div>
    </div>
  );
};

export default Card;
