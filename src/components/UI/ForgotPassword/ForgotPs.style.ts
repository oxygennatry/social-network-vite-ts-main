import styled from "styled-components";

export const ForgotStyle = styled.div`

.forgotinfo{
    width: 300px;
    text-align:center;
    line-height: 24px;
    size:20px;
}

h1{
    text-align: center;
    color: black;
    margin-top: 20px;
}

.passwordcard{
    padding: 30px;
    width: 492px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap: 16px;
    color:${(props) => props.theme.colors.gray};
    border-radius: 20px;
    background-color:${(props) => props.theme.colors.bgc}
}

input{
    border: 1px solid transparent;
 outline: 0;
 font-family: inherit;
padding: 12px 15px;
background-color: ${(props) => props.theme.colors.bgc};
border-radius: 10px;
border:1px solid transparent;
transition: 200ms;
border: 2px solid ${(props) => props.theme.colors.lightgray};
width: 412px;
}


.bgcPassword{
    background-color:${(props) => props.theme.colors.lightgray} ;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 640px;
}

.forgotbtn{
    width: 412px;
    text-align: center;
    text-decoration: none;
}

.forgotbtn:hover{
    text-decoration: none;
}

`