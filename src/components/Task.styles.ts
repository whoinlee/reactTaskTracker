import styled from 'styled-components';


export const Wrapper = styled.div`
  background: #f4f4f4;
  cursor: pointer;
  margin: 5px;

  div {
    margin-left: 0px;
    padding: 10px 20px;
  }

  .reminder {
    border-left: 5px solid green;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    text-align: left;
  }

  .faTimes {
    color: red;
    cursor: pointer;
  }
`;