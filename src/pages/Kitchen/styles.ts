import styled from 'styled-components';

export const Dashboard = styled.header`
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center; 
    color: #018C97;
    h1 {
        span {
            font-weight: bold;
            font-size: 40px;
        }
    }
`;

export const OrdersList = styled.section`
    ul {
        li {
            border-radius: 5px;
            border: 1px solid #E5E5E5;
            background: #fff;
            list-style-type: none;
            margin-bottom: 10px;
            header {
                border-radius: 5px 5px 0px 0px;
                border-bottom: 1px solid #E5E5E5;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                h2 {
                    color: #018C97;
                }
                button {
                    background: #79EACE;
                    width: 120px;
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
            ul {
                color: #3a3a3a;
                padding: 0 10px;
                border: none;
                li {
                    display: flex;
                    border: 0;
                    border-bottom: 1px solid #E5E5E5;
                    padding: 10px 0px;
                    margin-bottom: 0px;
                    &:last-child {
                        border-bottom: none;
                    }
                    img {
                        width: 60px;
                        height: 60px;
                        margin-right: 5px;
                        border-radius: 100%;
                    }
                    div {
                        h3 {
                            color: #018C97;
                        }
                    }
                }
            }
        }
    }
`;

export const Alert = styled.div`
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;