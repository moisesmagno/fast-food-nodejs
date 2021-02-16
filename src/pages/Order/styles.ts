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
                border: 1px solid #E5E5E5;
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
            &:hover {
                background: #73E1C6;
            }
        }
    }
`;

export const ModalOrderClose = styled.section`
    width: 100%;
    height: 100vh;
    background: #F5F5F5;
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #018C97;
        background: #018C97;
        color: #fff;
        padding: 20px;
        span {
            transition: color 0.2s;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                color: #79EACE;
            }
        }
    }
    section {
        padding: 20px;
        display: flex;
        justify-content: center;
        ul {
            width: 800px;
            li {
                list-style-type: none;
                margin-bottom: 10px;
                input {
                    width: 800px;
                    height: 50px;
                    border: 1px solid #E5E5E5;
                    border-radius: 5px;
                    padding: 0px 10px;
                }   
                div {
                    display: flex;
                    align-items: flex-start;
                    background: #fff;
                    box-sizing: border-box;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    border: 1px solid #E5E5E5;
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
                        border: none;
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
                        textarea {
                            margin-top: 10px;
                            border: 1px solid #E5E5E5;
                            width: 400px;
                            height: 50px;
                            border-radius: 5px;
                            padding: 5px; 
                        }
                    }
                    button {
                        background: #D26F6F;
                        width: 100px;
                        height: 50px;
                        color: #ffffff;
                        border-radius: 5px;
                        margin-left: 5px;
                        border: none;
                        &:hover {
                            background: #C55C5C;
                        }
                    }
                }
            }
        }
    }
`;

export const PaymentAndTotal = styled.section`
    text-align: center;
    padding: 0 !important;
    div {
        border: 1px solid #e5e5e5;
        width: 800px;
        padding: 10px; 
        border-radius: 5px;
        background: #F2F2F2;
        display: flex; 
        justify-content: space-between;
    }
`;

export const TypePayment = styled.ul`
    h4 {
        color: #018C97;
        text-align: left;
        margin-bottom: 5px; 
    }
    li {
        list-style-type: none;
        div {
            border: 1px solid #e5e5e5;
            height: 40px;
            width: 170px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
            &:hover {
                /* border: 1px solid #79EACE; */
                border-left: 7px solid #79EACE;;
            }
        }
        &:last-child {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            div:first-child {
                margin: 0;
            }
            div:last-child {
                display: flex;
                margin: 0;
                align-items: center;
                border: 0;
                background: transparent;
                margin-left: 20px;
            }
            input {
                height: 40px;
                margin-left: 5px;
            }
        }
    }
`;

export const Total = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
        list-style-type: none;
        text-align: right;
        margin
        h4 {
            text-align: right;
        }
        h5 {
            text-align: right;
        }
        h2 {
            color: #018C97;
        }
        h3 {
            color: #018C97;
        }
    }
`;

export const ContentButton = styled.section`
    text-align: center;
    display: flex;
    justify-content: center;
    button {
        background: #79EACE;
        width: 150px;
        height: 50px;
        color: #3a3a3a;
        border-radius: 5px;
        margin-left: 5px;
        border: none;
        margin-bottom: 20px;
        &:hover {
            background: #73E1C6;
            }
    }
`;