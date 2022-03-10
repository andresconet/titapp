import { useState } from 'react';
import styled from 'styled-components';
import Comments from './Comments';


const CardWrapper = styled.div`
box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
border-radius: 10px;
height: auto;
width: 100%;
margin: 10px auto;
background: #fff;
position: relative;
color:#000000 !important;
`;

const UserInfo = styled.div`
display: flex;
padding: 1rem 2rem;
img{
    border-radius: 50%;
    border: 2px solid #3f51b5;
    width: 70px;
    height: 70px;
}
span {
    padding: 0 1rem;
}
h4 {
    margin: 13px 0 3px 0;
}

`;

const PostContent = styled.div`
h3 {
 margin: 2rem 1rem;
}

img{
   max-width: 100%; 
}
`;

const Interactions = styled.div`
display:flex;
justify-content: space-around;
padding: 0 1rem .5rem;
font-weight: 500;
border-top: 1px solid #dddbdb;
background: #fbfbfb;
border-radius: 10px;

`;


 const Card = ({post}) => {

    const {id, image, likes, tags, text, publishDate, owner} = post;





    return (
        <CardWrapper id={id}>
                <UserInfo>
                    <img src={owner.picture} alt={owner.firstName}/>
                    <span>
                        <h4>{`${owner.firstName} ${owner.lastName}`} </h4>
                        <small>{publishDate.split('T')[0]}</small> 
                    </span>
                </UserInfo> 
            
                <PostContent>
                    <img src={image} alt={text}/>
                    <h3>{text}</h3>
                </PostContent>

                
               <Interactions>
                    <p className='likes'>{likes} Likes</p>
                    <Comments id={id} />

                    <p className='likes'>Tags: {tags.map(x=> `${x } `)} </p>
               </Interactions>
                

                {/* <PostInfo>
                
                </PostInfo> likes={this.props.args.likes} views={this.props.args.views} commentsCount={this.props.args.commentsCount} likeHandler={this.props.args.likeHandler} isLiked={this.props.args.isLiked} showComments={this.showComments} />
                <Comments comments={this.props.args.comments} isExpanded={this.state.commentsExpanded} hideComment={this.hideComment} />
                <CommentInput addCommentHandler={this.addCommentDecorator} /> */}
          
        </CardWrapper>
  );
}

export default Card;