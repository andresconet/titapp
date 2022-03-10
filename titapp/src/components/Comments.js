import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';
import {options} from '../request/dummyRequest';


const CommentsModal = styled.div`
height: auto;
width: 100%;
`;

const Comment = styled.div`
display: flex;
align-items: center;
gap: 3rem;
background: #dcdce5;
margin: 5px 10px 10px 0;
padding: 5px 10px;
border-radius: 10px;
h5 {
    margin-bottom: 0;
}
img{
    border-radius: 50%;
    border: 2px solid #3f51b5;
    width: 70px;
    height: 70px;
}


`;

const CloseModal = styled.button`
background: #fff;
border: none;
color: #959595;
cursor: pointer;
font-weight: 700;
font-size: 21px;
position: absolute;
top: 6px;
right: 8px;
`;

const Comments = ({id}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!modalIsOpen);

    const url = `https://dummyapi.io/data/v1/post/${id}/comment?limit=10`
     
    
const handleClick = () => {
        toggleModal()
        setLoading(true)

        axios.get(url, options)
        .then(({ data }) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    };         

    const modalStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          padding: '35px 15px 35px 21px',
          width: '100%',
          maxWidth: '600px',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            backgroundColor: '#000000cc'
          }
        };
    
  return (
    <>

    <p onClick={handleClick} style={{cursor: 'pointer'}}>--Comments--</p>

        <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={toggleModal} style={modalStyles}>
            <CommentsModal>
                <CloseModal onClick={toggleModal} >X</CloseModal>
                {loading 
                    ? <p>Cargando...</p>
                    : data && (data.total === 0 
                        ? <h3>No hay comentarios todavia</h3>
                        : data.data.map(({message, owner, publishDate}, i ) => {
                        return (
                            <Comment key={i}>
                                
                                <img src={owner.picture} alt={owner.firstName}/>
                                <span>
                                    <h5>{`${owner.firstName} ${owner.lastName}`}</h5>
                                    <small>{publishDate.split('T')[0]}</small> 
                                    <p>{message}</p>
                                </span>
                                  
                                
                            </Comment>
                        )
                    }))
                    }
                    {error && <h3>No podemos cargar los comentarios en este momento. {error}</h3>}
            </CommentsModal>
        </Modal>

  </>
  );
}

export default Comments;