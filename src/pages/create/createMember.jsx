import "./create.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CreateMember() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creationStatus, setCreationStatus] = useState(null);
  const token = sessionStorage.getItem("userToken");

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3300/api/member/add",
        {
          name,
          role,
          memberEmail,
          address,
          phoneNumber,
        },
        {
          headers: { authorization: `${token}` },
        }
      );

      setCreationStatus(response.data.message);
      console.log(response.data.success);

      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="heading">Create Member</div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        placeholder="Member Email"
        value={memberEmail}
        onChange={(e) => setMemberEmail(e.target.value)}
      />
      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        disabled={!name || !role || !memberEmail || !address || !phoneNumber}
        style={{
          cursor:
            !name || !role || !memberEmail || !address || !phoneNumber
              ? `not-allowed`
              : "pointer",
        }}
        onClick={handleCreate}
      >
        Create
      </button>

      {creationStatus && (
        <div
          className={
            creationStatus === "Member created successfully"
              ? "success-message"
              : "error-message"
          }
        >
          {creationStatus}
        </div>
      )}
    </motion.div>
  );
}
