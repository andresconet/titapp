import { useContext } from 'react';
import GoogleLogin from 'react-google-login'
import AppContext from '../context/AppContext';


 const SingIn = () => {
  const appContext = useContext(AppContext);
  const { setUserData} = appContext;

 
    const onSucces = (res) => {

        const info = {
            'Full_name': res.profileObj.name,
            'Image_url': res.profileObj.imageUrl,
            'Email': res.profileObj.email
          };

        info && setUserData(info)
        
    }

    const onFailure = res => {
        console.log('fallo ' + res)
    }


  return (
    <div style={{textAling: 'center'}}>
       <GoogleLogin
         clientId="104265486419-rm8mmlsh41pji1sbmv3emkgu872m1l7f.apps.googleusercontent.com"
         buttonText="Login....."
         onSuccess={onSucces}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
         isSignedIn={false}
        />
  </div>
  )
  };


export default SingIn;