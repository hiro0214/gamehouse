import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { User } from '../../types/user';

export type UserInfoContextType = {
  userInfo: User;
  setUserInfo: Dispatch<SetStateAction<User>>;
};

export const UserInfoContext = createContext({} as UserInfoContextType);

export const UserInfoProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState({} as User);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
