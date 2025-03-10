"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Project = () => {
  const { project } = useParams();
  return (
    <div>Products</div>
  )
}

export default Project;