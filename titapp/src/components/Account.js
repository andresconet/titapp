import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
 
const UserData = styled.div`
display: flex;
padding: 1rem 2rem;
img{
    border-radius: 50%;
    border: 2px solid #3f51b5;
    width: 60px;
    height: 60px;
}
span {
    padding: 0 1rem;
}
h4 {
    margin: 13px 0 3px 0;
}

`;


 const Account = () => {
  const appContext = useContext(AppContext);
  const {userData} = appContext;
  const {Full_name, Email, Image_url} = userData && userData
  
  return (
    <>
    {userData
                ?
                <UserData>
                        <span>
                          <h4>{`Hola, ${Full_name}`}</h4>
                          <small>{Email}</small> 
                        </span>
                      <img src={Image_url} alt={Full_name}/>
                    
                  </UserData> 
                : null
    }
  </>
  );
}

export default Account;