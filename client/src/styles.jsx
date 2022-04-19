import styled from "styled-components";

export const Container = styled.div`
    background-color: #4899d4;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerTodo = styled.div`
    background-color: #353739;
    width: 900px;
    height: 500px;
    color: #f1f1f1;
    padding: 20px 50px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
        100px 100px 80px rgba(0, 0, 0, 0.07);
`;

export const Title = styled.h1`
    margin: 20px 0;
`;

export const Button = styled.button`
    background-color: #4899d4;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    margin-left: 10px;
    color: #f1f1f1;
    cursor: pointer;
    font-size: 15px;
`;

export const Input = styled.input`
    padding: 10px 5px;
    width: 300px;
    font-size: 15px;
    margin: 0 5px;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const TodosContainer = styled.div`
    overflow: auto;
    height: 300px;
`;

export const TaskDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    padding: 10px;
    border-top: 1px #f1f1f1 solid; 
`;

export const Task = styled.div`
    text-align: start;
    cursor: pointer;
`;