import React  from 'react';
import styled from "styled-components";
import './App.css';
import  img from './/assets/img.jpg';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Live = styled.div`
    display: inline-block;
    margin-right:10px;
    width:300px;
    height:550px;
    border-radius:8px;
    background-color:#fff;
    
`;

const Comments = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 350px;
  height: 550px;
  border-radius: 8px;
  background-color: #fff;
`;
const Perfil = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
height:70px;
border-radius: 9px 9px 0px 0px;
border-bottom: 1px solid rgba(0,0,0,0.2);
background-color:#fff;

`;
const ProfilePic = styled.div`
width: 40px;
height:40px;
border-radius:50%;
margin:10px;
background-image:url(${img}) ;
background-size: cover;
`;
const ProfileName = styled.h2`
font-family: arial;
font-weight: 700;
font-size: 14px;
color: #334;
`;
const LiveStatus = styled.h2`
margin-left: 30px;
  font-family: arial;
  font-weight: 700;
  font-size: 13px;
  padding:7px;
  color: #FFF;
  border-radius:3px;
  background: linear-gradient(
    87deg,
    #833ab4,
    #fd1d1d
  );
`;

const View = styled.h3`
  margin-left: 7px;
  font-family: arial;
  font-weight: 700;
  font-size: 13px;
  width: 30px;
  padding: 7px;
  color: #fff;
  border-radius: 3px;
  background: #888;
`;
const Comment = styled.h3`
  height: 370px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const InputContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 330px;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  
 width: 220px;
 height:30px;
 border:0;
 padding:6px;
 outline:0;
`;

function App(){
  
 
  return (
    <Container>
      <Live id="live"></Live>
      <Comments>
        <Perfil>
          <ProfilePic />
          <ProfileName>Luis Geremias</ProfileName>
          <LiveStatus>EM DIRETO</LiveStatus>
          <View>3</View>
        </Perfil>
        <Comment />
        <InputContainer>
          <Icons>
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              stroke="currentColor"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <Input placeholder="Adiciona um comentário..." />
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </Icons>
        </InputContainer>
      </Comments>
    </Container>
  );
}    
     

export default App; 