import {
  FriendItem,
  IsOnlineStatus,
  FriendName,
  FriendAvatar,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <IsOnlineStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
