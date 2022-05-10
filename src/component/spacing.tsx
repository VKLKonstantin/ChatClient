import styled from "styled-components";

export const Whitespace = styled.div<{ interval: number }>`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0; 
    visibility: hidden;
    min-width: ${({ interval }) => interval}px;
    max-width: ${({ interval }) => interval}px;
    min-height: ${({ interval }) => interval}px;
    max-height: ${({ interval }) => interval}px;
    flex-basis: ${({ interval }) => interval}px;
`;
