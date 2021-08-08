import styled from "styled-components";
import loader from "../../assets/Loading.gif";

const LoaderContainer = styled.div`
height: 100%;
width:100%;
display:flex;
justify-content: center;
align-items: center;

position: fixed;
`

const LoadingIcon = styled.div`
background-image: url("${loader}");
background-size: cover;
height: 100px;
width:100px;
`


function Loading(){
    return (
       <LoaderContainer>
           <LoadingIcon />
       </LoaderContainer>
    )
}

export default Loading;