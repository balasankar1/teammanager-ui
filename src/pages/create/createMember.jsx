import "./create.scss";
export default function CreateMember() {
  return (
    <div className="card">
      <div className="heading">Create Member</div>
      <input placeholder="Name" />
      <input placeholder="Role" />
      <input placeholder="Email" />
      <input placeholder="Address" />
      <input placeholder="Phone number" />
      <button>create</button>
    </div>
  );
}
