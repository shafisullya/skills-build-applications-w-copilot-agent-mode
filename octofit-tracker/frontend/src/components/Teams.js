import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://potential-rotary-phone-6vjj7v9vwx7246vg-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Teams</h1>
      {teams.map(team => (
        <Card className="mb-3" key={team._id}>
          <Card.Body>
            <Card.Title>{team.name}</Card.Title>
            <Card.Text>Members: {team.members.map(member => member.username).join(', ')}</Card.Text>
            <Button variant="info">View Team</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Teams;
