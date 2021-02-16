import styled from 'styled-components';

export const Section = styled.section`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        form {
            input {
                width: 350px;
                height: 50px;
                border: 1px solid #c5c5c5;
                border-radius: 5px;
                padding: 0px 10px;
            }
            button {
                background: #79EACE;
                width: 100px;
                height: 50px;
                color: #3a3a3a;
                border-radius: 5px;
                margin-left: 5px;
                border: none;
                transition: backgroun 0.2s;
                &:hover {
                    background: #73E1C6;
                }
            }
        }

        div {
            display: flex;
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100px;
                height: 50px;
                border: 1px solid #c5c5c5;
                border-radius: 5px;
                background: #fff;
                font-size: 22px;
                span {
                    margin-right: 8px;
                }
            }
            button {
                background: #79EACE;
                width: 100px;
                height: 50px;
                color: #3a3a3a;
                border-radius: 5px;
                margin-left: 5px;
                border: none;
                transition: backgroun 0.2s;
                &:hover {
                    background: #73E1C6;
                }
            }
        }
    }
`; 

export const ListProducts = styled.section`
    display: block;
    margin-top: 50px;
    div {
        display: flex;
        align-items: center;
        background: #fff;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 10px;
        img {
            width: 100px;
            height: 100px;
            border-radius: 1005%;
        }
        div {
            display: block;
            margin-left: 10px;
            padding: 0;
            color: #3a3a3a;
            flex: 1;
            h2 {
                margin: 0;
                color: #018C97;
                margin-bottom: 5px;
            }
            p {
                margin-bottom: 10px;
            }
            span {
                font-weight: bold;
                font-size: 18px;
            }
        }
        button {
            background: #79EACE;
            width: 100px;
            height: 50px;
            color: #3a3a3a;
            border-radius: 5px;
            margin-left: 5px;
            border: none;
            transition: backgroun 0.2s;
            &:hover {
                background: #73E1C6;
            }
        }
    }
`;