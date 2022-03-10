
import { useState , useEffect , useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card';
import AppContext from '../context/AppContext';
import { options } from '../request/dummyRequest';
import FilterTags from './FilterTags';
import SingIn from './SingIn';

const Wrapper = styled.div`
background-color: #3c4cad;
background-image: linear-gradient(180deg,#3c4cad,#c24ca2,#ff6d7d,#ffb05d,#3c9908);
min-height: 200vh;
padding: 3rem 0 24rem;
color:#fff;
@media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const InnerWrapper = styled.div`
max-width: 1000px;
width:100%;
display: flex;
flex-direction: column-reverse;
@media (min-width: 768px) {
    
    flex-direction: row-reverse;
  }
`;


const Feed = styled.div`
display: flex;
flex-direction: column;

width:100%;
@media (min-width: 768px) {
    margin-right: 265px;
  }
`;

const Sidebar = styled.div`
box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
border-radius: 10px;
background: #ffffffed;
padding: 1.5rem;
Color: #000000;
text-align: center;
margin-top: 10px;
width:100%;
@media (min-width: 768px) {
    position: fixed;
    max-width: 250px;
    height: 60vh;
  }
`;


const Content = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const appContext = useContext(AppContext);
    const {   
        tag,
        userData,
        setAlltags,
        setUserData
    } = appContext;

    
const url = `https://dummyapi.io/data/v1/${tag ? `tag/${tag}/` : ''}post?limit=10`


useEffect(() => {
    setLoading(true)

    axios.get(url, options)
    .then(({ data }) => setPost(data))
    .catch((err) => setError(err))
    .finally(() => setLoading(false))

    window.scrollTo(0,0)

}, [tag]);

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}

useEffect(() => {
    const info = JSON.parse(localStorage?.getItem('userData'));
    info && setUserData(info)

    let everyTags = []
    post?.data.map((post) => post.tags.map( x => everyTags.push(x)))
    let cleanTags = removeDuplicates(everyTags)
        cleanTags && setAlltags(cleanTags)

}, [post]);

    return (
        <Wrapper>
            {!userData
                ? 
                <SingIn />
                : 
                <InnerWrapper>
                <Feed>
                {loading 
                    ? 
                        <p>Cargando...</p>
                    : 
                    post?.data.map((post, i) => {
                        return (
                        
                            <Card post={post} key={i}/>
                        
                        )
                    })}
                    {error && <h3>No podemos cargar información en este momento.</h3>}
                </Feed>
                <Sidebar>
                    <FilterTags />
                </Sidebar>
                </InnerWrapper>                  
                }
        </Wrapper>
    );
  }
  
  export default Content;