import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: auto;
  width: 400px;
  text-align: center;
`;

export const ProfileDesc = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  background: white;
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: auto;
  border-radius: 10%;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
  background-color: #88b8c2;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
`;

export const UserTag = styled.p`
  font-size: 16px;
  color: #a4a3a3;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const UserLocation = styled.p`
  font-size: 16px;
  color: #a4a3a3;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const StatsList = styled.ul`
  padding-left: 5px;
  padding-right: 5px;

  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid #7fa7ae;
  background-color: #88b8c2;
`;

export const StatsItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  font-size: 16px;
  width: 100px;
  height: 50px;

  &:not(:last-child) {
    border-right: 1px solid #7fa7ae;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
`;
export const Quantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;
