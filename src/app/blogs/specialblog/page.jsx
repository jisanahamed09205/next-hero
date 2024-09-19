import React from 'react';
import Link from 'next/link';


const SpecialBlog = () => {
    return (
        <div>
            {
                specialBlogs.map((blog)=>(
                <div key={blog.id} className="border-2 p-12">
                    <h1>{blog.title}</h1>
                    <h3>{blog.slug}</h3>
                    <p>{blog.description}</p>
                    <button className="bg-red-400 p-1 px-2 rounded">
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>
                </div>
            ))
            }
        </div>
    );
};

const specialBlogs = [
    {
      id: 1,
      slug: "advanced-react-patterns",
      title: "Advanced React Patterns",
      description: "Explore advanced patterns in React to build more flexible and scalable applications."
    },
    {
      id: 2,
      slug: "tailwind-best-practices",
      title: "Tailwind CSS Best Practices",
      description: "Discover the best practices for using Tailwind CSS efficiently in modern web development."
    },
    {
      id: 3,
      slug: "nextjs-api-routes",
      title: "Building APIs with Next.js",
      description: "Learn how to create and manage API routes in Next.js for seamless server-side functionality."
    },
    {
      id: 4,
      slug: "web-security-essentials",
      title: "Web Security Essentials",
      description: "Understand the core principles of web security and how to protect your applications from vulnerabilities."
    },
    {
      id: 5,
      slug: "modern-javascript-tooling",
      title: "Modern JavaScript Tooling",
      description: "An overview of the latest tools and workflows for JavaScript development, including bundlers, linters, and more."
    }
  ];
  
export default SpecialBlog;