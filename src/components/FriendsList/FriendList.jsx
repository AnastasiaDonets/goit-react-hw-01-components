import { FriendListItem } from './FriendListItem';
import { FriendsList } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.number.isRequired,
      isOnline: PropTypes.string.isRequired,
    })
  ),
};
