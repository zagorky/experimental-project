import { UserType } from '~types/types.ts';

export const UserRenderer = ({ users }: { users: Set<UserType> }) => {
  const usersArray = [...users];

  return (
    <>
      {usersArray.length > 0 && (
        <>
          <h2>User List</h2>
          <ul>
            {usersArray.map((user) => (
              <li key={`${user.name}-${user.email}`}>
                {user.name} {user.email}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
