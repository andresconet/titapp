import { useState } from 'react';
import Context from './AppContext';

const AppContextProvider = (props) => {
    const [tag, setTag] = useState('water');
    const [allTags, setAlltags] = useState('');
    const [isLogin, setIslogin] = useState(false);
    const [userData, setUserData] = useState('');


    return (
      <Context.Provider
        value={{
          ...props,
          tag,
          allTags,
          isLogin,
          userData,
          setTag,
          setAlltags,
          setIslogin,
          setUserData
        }}
      >
        {props.children}
      </Context.Provider>
    );
  };
  
  export default AppContextProvider;