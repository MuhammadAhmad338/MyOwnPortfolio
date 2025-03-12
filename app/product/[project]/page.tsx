"use client"
import ProjectComponent from '@/app/components/projectComponent';
import { useParams } from 'next/navigation';
import React from 'react';

const Project = () => {
  const { project } = useParams();
  return (
    <ProjectComponent title='Rectangle' description='Rectangle is the best thing'  />  
   )
}

export default Project;