import styled, { css } from "styled-components"

export const CalcContainer = styled.div(
  () => css`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `
)

export const Heading = styled.h1(
  () => css`
    font-size: 32px;
    text-align: center;
    padding: 0;
    margin: 0;
    @media (max-width: 700px) {
      font-size: 25px;
    }
  `
)

export const InputsContainer = styled.div(
  () => css`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  `
)

export const InputContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `
)

export const Input = styled.input(
  () => css`
    font-size: 1.15rem;
    border: 1px solid black;
    border-radius: 4px;
    outline-color: #42f575;
    padding: 10px;
  `
)

export const InputLabel = styled.span(
  () => css`
    font-size: 15px;
    @media (max-width: 700px) {
      font-size: 13px;
    }
  `
)

export const Button = styled.button(
  () => css`
    padding: 15px;
    font-size: 1.15rem;
    background-color: #42f575;
    color: white;
    width: 150px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `
)
