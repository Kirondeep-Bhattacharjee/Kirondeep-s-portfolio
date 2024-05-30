import styled from 'styled-components';

const AlertWrapper = styled.div`
  position: absolute;
  top: 2.5rem; /* Equivalent to 'top-10' */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertBox = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ebf4ff; /* Equivalent to 'text-indigo-100' */
  line-height: 1;
  border-radius: 9999px; /* Equivalent to 'lg:rounded-full' */
  background-color: ${({ type }) => (type === 'danger' ? '#c53030' : '#2b6cb0')}; /* Equivalent to 'bg-red-800' and 'bg-blue-800' */
`;

const AlertType = styled.p`
  display: flex;
  border-radius: 9999px; /* Equivalent to 'rounded-full' */
  text-transform: uppercase;
  padding: 0.25rem 0.5rem; /* Equivalent to 'px-2 py-1' */
  font-size: 0.75rem; /* Equivalent to 'text-xs' */
  font-weight: 600; /* Equivalent to 'font-semibold' */
  margin-right: 0.75rem; /* Equivalent to 'mr-3' */
  background-color: ${({ type }) => (type === 'danger' ? '#f56565' : '#4299e1')}; /* Equivalent to 'bg-red-500' and 'bg-blue-500' */
`;

const AlertText = styled.p`
  margin-right: 0.5rem; /* Equivalent to 'mr-2' */
  text-align: left;
`;

const Alert = ({ type, text }) => {
  return (
    <AlertWrapper>
      <AlertBox type={type} role='alert'>
        <AlertType type={type}>
          {type === "danger" ? "Failed" : "Success"}
        </AlertType>
        <AlertText>{text}</AlertText>
      </AlertBox>
    </AlertWrapper>
  );
};

export default Alert;
