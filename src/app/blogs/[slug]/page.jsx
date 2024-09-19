import React from 'react';

const Slug = ({params}) => {
    console.log(params.slug);
    const {title, description} = blogsData.find((blog)=>blog.slug == params.slug);
    return (
        <div className="h-screen">
            <h1>{title}</h1>
            <p>{description}</p>
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

export default Slug;