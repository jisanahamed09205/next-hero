import Link from 'next/link';
import React from 'react';

const aboutPage = () => {
    return (
        <div className=" flex justify-evenly items-center space-y-4 text-red-600">
            <Link href="/about/history">History</Link>
            <Link href="/about/mission">Mission</Link>
        </div>
    );
};

export default aboutPage;