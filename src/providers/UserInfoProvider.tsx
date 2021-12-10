import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { User } from '../../types/user';

export type UserInfoContextType = {
  myInfo: User;
  setMyInfo: Dispatch<SetStateAction<User>>;
};

export const UserInfoContext = createContext({} as UserInfoContextType);

export const UserInfoProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [myInfo, setMyInfo] = useState<User>({} as User);

  return (
    <UserInfoContext.Provider value={{ myInfo, setMyInfo }}>{children}</UserInfoContext.Provider>
  );
};

export const useMyInfo = (): UserInfoContextType => useContext(UserInfoContext);
