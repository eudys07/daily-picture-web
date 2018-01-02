import styled from 'styled-components';

const VisibleDiv = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
`;

export default VisibleDiv;