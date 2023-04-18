import styled from 'styled-components'

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding: 20px;
}

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  margin-top: 20px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 70vh;
`
export const Heading = styled.h1`
  color: rgb(51, 65, 85);
  font-size: 50px;
  font-weight: 500;
  margin: 0px 0px 20px;
`
export const Label = styled.label`
  color: rgb(123, 135, 148);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px px;
`
export const Select = styled.select`
  color: rgb(51, 65, 85);
  background-color: transparent;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid rgb(123, 135, 148);
  margin-bottom: 30px;
  padding-left: 15px;
`
export const Button = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(37, 99, 235);
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const Input = styled.input`
  color: rgb(123, 135, 148);
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  width: 50%;
  outline: none;
  border: 1px solid rgb(123, 135, 148);
  margin-bottom: 30px;
  padding-left: 15px;
`
export const Err = styled.p`
  color: rgb(255, 11, 55);
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
`
