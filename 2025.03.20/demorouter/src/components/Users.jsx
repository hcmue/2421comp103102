import { Link, useParams } from 'react-router'
export const Users = ({ users }) => {

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
            let userUrl = `/users/${user.id}`;
            return (
            <li key={user.id}>
                <a href={userUrl}>{user.fullName}</a>
            </li>
            )}
        )}
      </ul>
    </>
  );

};


export const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h2>User: {userId}</h2>
      <Link to="/users">Back to Users</Link>
    </>
  );
};