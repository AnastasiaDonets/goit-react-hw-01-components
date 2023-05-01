import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 125237)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticBox = styled.section`
  text-align: center;
  width: 250px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700px;
  margin: 10px;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  box-shadow: -1px 15px 30px -12px black;
`;

export const StatisticItem = styled.li`
  color: white;
  padding: 10px;
  font-size: 17px;
  font-weight: 700px;
  background-color: ${getRandomHexColor};
  width: 100%;
`;

export const Label = styled.span``;
export const Percentage = styled.span`
  font-weight: 700;
`;
