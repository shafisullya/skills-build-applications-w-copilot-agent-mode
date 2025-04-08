import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://potential-rotary-phone-6vjj7v9vwx7246vg-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Users</h1>
      {users.map(user => (
        <Card className="mb-3" key={user._id}>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>Email: {user.email}</Card.Text>
            <Button variant="secondary">Contact</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Users;
