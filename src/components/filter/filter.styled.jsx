import styled from 'styled-components';
export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: 000;
`;
export const FilterInput = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:focus {
    outline: 1px solid #00b451;
  }
`;