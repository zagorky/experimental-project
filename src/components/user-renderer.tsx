import { UserType } from '~types/types.ts';

export const UserRenderer = ({ users }: { users: Set<UserType> }) => {
  const usersArray = Array.from(users.values());
  return (
    <>
      {usersArray.length > 0 && (
        <>
          <h2>User List</h2>
          <ul>
            {usersArray.map((user) => (
              <li key={user.id}>
                {user.name} {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
