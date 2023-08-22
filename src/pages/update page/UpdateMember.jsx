import "./update.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateMember() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("m_id");

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creationStatus, setCreationStatus] = useState(null);

  const handleUpdate = async () => {
    const token = sessionStorage.getItem("userToken");
    try {
      const response = await axios.put(
        `http://localhost:3300/api/member/update/${id}`,
        {
          name,
          role,
          memberEmail,
          address,
          phoneNumber,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
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
    <div className="card">
      <div className="heading">Update Member</div>
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
        onClick={handleUpdate}
      >
        Update
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
    </div>
  );
}
