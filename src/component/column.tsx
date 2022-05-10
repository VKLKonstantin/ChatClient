
import styled from 'styled-components';

export const Column = styled.div<{ horizontalLocation?: string; verticalLocation?: string; space?: number }>`
    display:flex;
    flex-direction: column;
    justify-content: ${({ horizontalLocation }) => horizontalLocation};
    align-items: ${({ verticalLocation }) => verticalLocation};
    flex-wrap: nowrap;
    height: 100%;
    padding: ${({ space }) => space}px;
`;