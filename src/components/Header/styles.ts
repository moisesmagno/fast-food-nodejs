import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: #018C97;
    box-sizing: border-box;
    
    h1 {
        margin: 0;
    }

    ul {
        display: flex;

        li {
            list-style-type: none;
            margin-left: 30px;

            a {
                text-decoration: none; 
                color: #fff;

                &:hover {
                    text-decoration: underline; 
                }
            }
        }
    }
`; 