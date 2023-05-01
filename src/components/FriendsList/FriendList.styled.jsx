import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  box-shadow: -1px 15px 30px -12px black;
  background-color: #dff4f4;
`;

export const IsOnlineStatus = styled.span`
  margin-right: 10px;
  margin-left: 15px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
`;
