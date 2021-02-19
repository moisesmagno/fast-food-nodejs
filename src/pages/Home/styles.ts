import styled from 'styled-components';

export const SectionHome = styled.section`
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 22px;
    color: #018C97;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    div {
        margin-top: 50px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        ul {
            display: flex;
            justify-content: space-between;
           li {
                width: 160px;
                height: 160px;
                list-style-type: none;
                background: #fff;
                padding: 20px 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid #e5e5e5;
                border-radius: 5px;
                margin-bottom: 20px;
                text-align: center;
            }
        }
    }
    
`;