import styled from 'styled-components'

export const FallContainer = styled.div`
    /* appearance */
    background-color: #7748AC;
    font-family: Helvetica;

    /* size */
    height: ${props => props.height}px;

    /* position */
    padding-left: 50px;
    padding-right: 50px;
`
export const FallHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`
export const Title = styled.h2`
    color: white;    
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.titleSize}px;
    line-height: 83px;

    padding-top: 20px;
    padding-right: 10px;
`
export const CustomButton = styled.button`
    background-color: #826D9E;
    color: white;
    text-align: center;
    text-decoration: none;

    border-radius: 100px;
    border: none;
    width: 60px;
    height: 30px;

    margin-left: 320px;
`
export const FallMenuWrapper = styled.div`
    padding-top: ${props => props.paddingTop}px;   
`