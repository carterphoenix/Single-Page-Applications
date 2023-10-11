import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './userDetail.css';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userId } = this.props.match.params;
    const userModel = window.models.userModel(userId);

    return (
      <div>
        <Typography variant="h4">User Details</Typography>
        <Typography variant="body1">
          Name: {userModel.first_name} {userModel.last_name}
        </Typography>
        <Button
          component={Link}
          to={`/user/${userId}/photos`}
          variant="outlined"
          color="primary"
        >
          View Photos
        </Button>
      </div>
    );
  }
}

export default UserDetail;
