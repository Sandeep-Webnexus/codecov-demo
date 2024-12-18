import React, { useState, useEffect } from 'react';

const HealthCheck = () => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/health");
        const data = await response.json();
        setStatus(data.message);
      } catch (error) {
        setStatus("Error fetching health status");
      }
    };
    
    checkHealth();
  }, []);

  return (
    <div>
      <div data-testid="health-status">{status}</div>
    </div>
  );
};

export default HealthCheck;
