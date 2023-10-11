import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import './UserList.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // Fetch user data from the model
    const users = window.models.userListModel();
    this.setState({ users });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
        </Typography>
        <List component="nav">
          {users.map((user) => (
            <div key={user._id}>
              <ListItem>
                <ListItemText primary={`${user.first_name} ${user.last_name}`} />
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
