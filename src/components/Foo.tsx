// src/components/DynamicPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Foo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>Repo ID: {id}</div>;
};

export default Foo;
