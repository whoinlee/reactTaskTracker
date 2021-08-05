import styled from 'styled-components';


export const Wrapper = styled.form`
    margin-bottom: 40px;

    .form-control {
        margin: 20px 0;
    }

    .form-control label {
        display: block;
        text-align: left;
        /* padding-left: 5px; */
    }

    .form-control input {
        width: 98%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }

    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-control-check label {
        flex: 1;
    }

    .form-control-check input {
        flex: 2;
        height: 20px;
    }

    .btn-block {
        display: block;
        width: 100%;
    }

    .btn {
        display: inline-block;
        background: #000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        font-size: 15px;
        font-family: inherit;
        width: 98%;
    }

    .btn:focus {
        outline: none;
    }

    .btn:active {
        transform: scale(0.98);
    }
`;