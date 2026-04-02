import { useAuthStore } from "../stores/useAuthStore";


const Header = () => {
  const { user, logout } = useAuthStore();

  return (
    <div>
      {user ? (
        <>
          <p>{user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Chưa đăng nhập</p>
      )}
    </div>
  );
};

export default Header;