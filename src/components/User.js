export default function User({ user }) {
  return (
    <div key={user.id}>
      <li style={{ listStyle: "none" }}>{user.name}</li>
      <li style={{ listStyle: "none", color: "#888", marginBottom: 20 }}>
        {user.email}
      </li>
    </div>
  );
}
