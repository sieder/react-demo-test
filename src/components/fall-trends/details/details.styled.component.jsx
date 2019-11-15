import Styled from 'styled-components'

export const DetailsContainer = Styled.div`
    color: white;
    font-family: Helvetica;

    padding-top: 480px;

    position: absolute;
    opacity: ${({ state }) => (state === "entering" ? 0 : 1 )};
`
export const Text = Styled.div`
    opacity: ${props => props.opacity};
    font-size: 20px;
    line-height: 123.49%;
`
export const HideButton = Styled.button`
    margin-top: 50px;
`