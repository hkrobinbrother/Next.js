import Link from 'next/link';
import React from 'react'

export default function ServicesPage() {

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


  return (
    <div>
      <p className='text-bold text-4xl'>Our Services page</p>
      {
        data.map((d) => {
          return(
            <div key={d.id}>
              <Link href={`/services/${d.id}`}>
              <h1>{d.title}</h1>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
