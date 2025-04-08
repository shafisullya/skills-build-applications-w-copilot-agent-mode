import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://potential-rotary-phone-6vjj7v9vwx7246vg-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Leaderboard</h1>
      {leaderboard.map(entry => (
        <Card className="mb-3" key={entry._id}>
          <Card.Body>
            <Card.Title>{entry.user.username}</Card.Title>
            <Card.Text>Score: {entry.score}</Card.Text>
            <Button variant="success">Congratulate</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Leaderboard;
