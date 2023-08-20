import "./create.scss";
export default function createMember() {
  return (
    <div className="card">
      <div>create Member</div>
      <input placeholder="name" />
      <input placeholder="role" />
      <input placeholder="email" />
      <input placeholder="address" />
      <input placeholder="phone number" />
    </div>
  );
}
