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

    transition: 'all .30s ease-out';
`

export const FallHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    /* vertical-align: middle; */
`

export const Title = styled.h2`
    color: white;    
    font-style: normal;
    font-weight: normal;
    /* font-size: 42px; */
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
`

export const FallMenuWrapper = styled.div`
    /* background-color: #7748AC; */
    ${props => console.log(props.paddingTop)}
    padding-top: ${props => props.paddingTop}px;   
`