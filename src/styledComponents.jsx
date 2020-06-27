import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import theme from 'styled-theming';


export const backgroundColor = theme('theme', {
    light: '#fff',
    dark: '#2d2d2d',
});

export const fontColor = theme('theme', {
    light: '#000',
    dark: '#fff',
});

export const AppTitle = styled.h1`
    font-size: 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #DC143C;
`;

export const ImageInput = styled.input`
    height: 20px !important;
`;

export const ImageLabel = styled.label`
    display: block;
    font-size: 22px;
    color: #DC143C;
`;

export const Paragraph = styled.p`
    color: ${fontColor};
`;

export const ThemedRow = styled(Row)`
    background-color: ${backgroundColor};
    height: 100vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

export const ThemedInput = styled.input`
    background-color: #f1f1f1;
    color: #000000;
`