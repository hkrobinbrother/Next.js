import React from "react";

export default async function ServicesDetailsPage({ params }) {

  const { id } = await params;

  const data = [
    {
    id: 1,
    title: "Frontend Web Development",
    name: "Modern UI Development",
    description:
      "I build responsive and modern user interfaces using React, Tailwind CSS, and JavaScript. The goal is to create fast, accessible, and visually appealing web applications."
  },
  {
    id: 2,
    title: "Full Stack Development",
    name: "Complete Web Solutions",
    description:
      "I develop full-stack web applications with authentication, database integration, and secure APIs using modern technologies."
  },
  {
    id: 3,
    title: "UI / UX Optimization",
    name: "User Experience Design",
    description:
      "Improving website usability, performance, and accessibility to ensure users have a smooth and enjoyable experience."
  },
  {
    id: 4,
    title: "Website Performance",
    name: "Speed Optimization",
    description:
      "Optimizing websites for faster load times, better SEO ranking, and improved performance across all devices."
  },
  ];

  const singleData = data.find((d) => d.id === Number(id));

  
  if(singleData){
  return (
    <div>
      <p className="font-bold text-2xl">Service Page</p>
      <p className="text-lime-300">ID: {id}</p>
      <p>{singleData.title}</p>
      <p>{singleData.name}</p>
      <p>{singleData.description}</p>
    </div>
  );
  }else{
    return <p>Service not found</p>;
  }

}