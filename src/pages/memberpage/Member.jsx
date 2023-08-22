import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import "./member.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Member() {
  const [members, setMembers] = useState([]);
  const token = sessionStorage.getItem("userToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3300/api/member/getall", {
          headers: { authorization: `${token}` },
        });

        setMembers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [members]);

  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="addLogout">
        <Link to="/add">
          <button>Add Member</button>
        </Link>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      <div className="allCards">
        {members.map((member, index) => (
          <Card
            key={index}
            id={member.id}
            name={member.name}
            role={member.role}
            email={member.email}
            address={member.address}
            phone={member.phoneNumber}
          />
        ))}
      </div>
    </motion.div>
  );
}
