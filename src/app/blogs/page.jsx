import React from 'react';
import Link from 'next/link';

const BlogsPage = () => {
    return (
        <div>
            <div className="flex justify-evenly items-center space-y-4 text-red-600">
                <Link href="/blogs/specialblog">Special Blog Page</Link>
            </div>
            {
                blogsData.map((blog)=>(
                <div key={blog.slug} className="border-2 p-12">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <button className="bg-green-400 p-1 px-2 rounded">
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>
                </div>
            ))
            }
        </div>
    );
};

const blogsData = [
    {
        slug: "intro-to-react",
        title: "Introduction to React",
        description: "Learn the basics of React, a popular JavaScript library for building user interfaces."
    },
    {
        slug: "tailwind-vs-bootstrap",
        title: "Tailwind CSS vs Bootstrap",
        description: "A comparison between Tailwind CSS and Bootstrap, two popular frameworks for designing responsive websites."
    },
    {
        slug: "nextjs-routing",
        title: "Mastering Routing in Next.js",
        description: "An in-depth guide on how to handle routing in Next.js to build dynamic web applications."
    },
    {
        slug: "improving-web-performance",
        title: "Improving Web Performance",
        description: "Tips and techniques for optimizing the performance of your web applications."
    },
    {
        slug: "javascript-es6-features",
        title: "Top ES6 Features in JavaScript",
        description: "A look at the most useful ES6 features that make JavaScript more powerful and developer-friendly."
    }
];  

export default BlogsPage;