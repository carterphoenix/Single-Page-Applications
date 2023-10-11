import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import './userList.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // Replace this with your data-fetching logic from an API or model
    const userIds = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
    ];
    this.setState({ users: userIds });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://mui.com/components/lists/">Lists</a> and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
          {users.map((user) => (
            <div key={user.id}>
              <ListItem>
                <ListItemText primary={user.name} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Typography variant="body1">
          The model comes in from window.models.userListModel()
        </Typography>
      </div>
    );
  }
}

export default UserList;
