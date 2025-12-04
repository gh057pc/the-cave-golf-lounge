import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const FAKE_USERS = [
  { name: "Pat Carver", tier: "Birdie Member", initials: "PC" },
  { name: "Justin Kimball", tier: "Eagle Member", initials: "JK" },
  { name: "Philip Parker", tier: "Albatross Member", initials: "PP" },
];

export function UserProvider({ children }) {
  const [user, setUser] = useState(FAKE_USERS[0]);

  useEffect(() => {
    // Pick a random user on client-side mount
    const randomIndex = Math.floor(Math.random() * FAKE_USERS.length);
    setUser(FAKE_USERS[randomIndex]);
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
