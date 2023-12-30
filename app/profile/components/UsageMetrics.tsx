'use client';

import { Card, Title } from '@tremor/react';

const UsageMetrics = () => {
  // Function to generate a random number between min and max
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="w-full md:w-1/2 lg:w-2/3 rounded-md flex flex-col md:flex-row justify-center gap-4 m-auto border-[0px] p-auto mx-auto">
      <Card className="max-w-lg bg-dark-tremor-background-muted">
        <Title className="text-white">Graphs Created</Title>
        <h1 className="text-5xl font-bold text-white">
          {getRandomNumber(1, 100)}
        </h1>
      </Card>
      <Card className="max-w-lg">
        <Title>Graphs Shared</Title>
        <h1 className="text-5xl font-bold text-white">
          {getRandomNumber(1, 100)}
        </h1>
      </Card>
      <Card className="max-w-sm mx-auto">
        <Title>Paper Collected</Title>
        <h1 className="text-5xl font-bold text-white">
          {getRandomNumber(1, 100)}
        </h1>
      </Card>
    </div>
  );
};

export default UsageMetrics;
