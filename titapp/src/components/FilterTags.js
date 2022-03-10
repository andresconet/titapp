import { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
 
 const BtnTag = styled.button`
 background: #434cac;
 color: #ffffff;
 cursor: pointer;
 font-size: 1.4rem;
 padding: 7px 20px 11px;
 margin: 5px;
 border-radius: 50px;
 border: none;
 text-transform: capitalize;
`;

 const FilterTags = () => {
  const appContext = useContext(AppContext);
  const {allTags, setTag} = appContext;

  return (
    <>
    <h2>Filter Tags</h2>
{
        allTags && allTags.map((tag, i) => {
                    return (
                    
                        <BtnTag onClick={()=>setTag(tag)} key={i}>
                            {tag}
                        </BtnTag>
                    )
                })
            }
            <br/>
            <br/>
            <br/>
            <p><small>Refresh to logout</small></p>
  </>
  );
}

export default FilterTags;