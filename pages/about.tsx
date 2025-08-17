// pages/about.tsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import bookImage from "/public/assets/images/cover2.webp"; 
import bookImage2 from "/public/assets/images/cover.webp";
import Countries from "../components/Countries"; // Assuming this component exists
import { Country } from "../types/contentful"; // Assuming this type exists

// --- Component Data ---
const hobbies = [
    { title: "Weightlifting", emoji: "🏋🏾", left: "3%", top: "-3%" },
    { title: "Electric Vehicles", emoji: "⚡️", left: "32%", top: "12%" },
    { title: "Retro Games", emoji: "🎮", left: "62%", top: "-5%" },
    { title: "Reading", emoji: "📙", left: "3%", top: "35%" },
    { title: "Astronomy", emoji: "🪐", left: "65%", top: "35%" },
    { title: "Traveling", emoji: "✈️", left: "34%", top: "40%" },
    { title: "Watching Bad Movies", emoji: "🍿", left: "3%", top: "65%" },
    { title: "Music", emoji: "🎵", left: "73%", top: "60%" },
    { title: "Sneakers", emoji: "👟", left: "45%", top: "70%" }, 
];

const countries: Country[] = [
    { code: "HK", name: "Hong Kong" }, { code: "TW", name: "Taiwan" },
    { code: "VN", name: "Vietnam" }, { code: "SG", name: "Singapore" },
    { code: "CA", name: "Canada" }, { code: "DK", name: "Denmark" },
    { code: "FI", name: "Finland" }, { code: "FR", name: "France" },
    { code: "ID", name: "Indonesia" }, { code: "JM", name: "Jamaica" },
    { code: "JP", name: "Japan" }, { code: "MX", name: "Mexico" },
    { code: "NL", name: "Netherlands" }, { code: "PR", name: "Puerto Rico" },
    { code: "SE", name: "Sweden" }, { code: "BS", name: "The Bahamas" },
    { code: "GB", name: "United Kingdom" }, { code: "US", name: "United States" },
];


// --- Main About Page Component ---
const AboutPage = () => {
    const coreSkills = [
        "C# & .NET Core", "Node.js", "React & Next.js", "TypeScript", 
        "SQL & NoSQL", "Azure & AWS", "CI/CD", "Agile Methodologies"
    ];

    return (
        <main className="pt-24 bg-gray-50/50">
            <Head>
                <title>About Me | Kenny Whyte</title>
                <meta name="description" content="Learn more about Kenny Whyte, a full-stack software engineer specializing in modern web technologies." />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {/* --- 1. Hero Section --- */}
            <section className="container mx-auto max-w-5xl text-center py-16 md:py-24">
                {/* <div className="flex justify-center mb-8">
                    <Image
                        src="/assets/images/memoji-avatar.png" // Your memoji
                        width={150}
                        height={150}
                        alt="Kenny Whyte's Memoji"
                        className="rounded-full bg-green-200/50 p-3 shadow-lg"
                    />
                </div> */}
                <h1 className="font-serif text-4xl md:text-6xl font-bold">Hi, I'm Kenny Whyte.</h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    I'm a passionate full-stack engineer dedicated to building software that is not only functional but also intuitive and enjoyable to use. I thrive on solving complex problems and turning innovative ideas into reality.
                </p>
                {/* <div className="mt-8 flex justify-center items-center gap-4">
                    <Button asChild size="lg">
                        <a href="/kenny-whyte-resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" /> Download Resume
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/contact">
                            <Mail className="mr-2 h-4 w-4" /> Get in Touch
                        </Link>
                    </Button>
                </div> */}
            </section>

            {/* --- 2. My Journey Section --- */}
            <section className="container mx-auto max-w-5xl py-16 md:py-24 border-t">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h2 className="font-serif text-3xl font-bold">My Journey</h2>
                    </div>
                    <div className="md:col-span-2 text-muted-foreground text-lg space-y-6">
                        <p>
                            My journey into software development began with a fascination for how things work. This curiosity led me to pursue a degree in Computer Science, where I discovered my passion for web development. I was captivated by the ability to create applications that could be used by people all over the world.
                        </p>
                        <p>
                            Over the years, I've had the opportunity to work on a variety of projects, from large-scale enterprise applications to fast-paced startup environments. These experiences have taught me the importance of writing clean, maintainable code and the value of effective collaboration within a team.
                        </p>
                        <p>
                            Today, I'm focused on leveraging my skills in the .NET and JavaScript ecosystems to build robust and scalable full-stack solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- 3. Skills & Philosophy Section --- */}
            <section className="bg-white py-16 md:py-24 border-t">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold">Skills & Philosophy</h2>
                        <p className="mt-2 text-lg text-muted-foreground">My approach to building great software.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Core Technologies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    The primary tools and technologies I work with daily.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {coreSkills.map(skill => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>My Philosophy</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <p><strong>User-Centric Design:</strong> I believe the best applications are built with the end-user in mind. Functionality should be intuitive and the experience seamless.</p>
                                <p><strong>Clean & Scalable Code:</strong> I write code that is not only effective but also easy for other developers to read, maintain, and build upon.</p>
                                <p><strong>Continuous Learning:</strong> The tech landscape is always evolving, and I am committed to staying current with the latest trends and best practices.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* --- 4. NEW: Life Beyond Code Section --- */}
            <section className="py-16 md:py-24 border-t">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold">Life Beyond Code</h2>
                        <p className="mt-2 text-lg text-muted-foreground">When I'm not at my keyboard, you can find me...</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="lg:col-span-2">
                            <CardHeader>
                                <CardTitle>Places I've Been</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">I've been fortunate enough to wander some incredible corners of the world:</p>
                                <Countries countries={countries} />
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Reading List</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-center items-center pt-6">
                               <div className='relative w-60 h-60'>
                                    <div className='absolute top-0 -left-6 z-20 transition-transform duration-300 hover:scale-110 hover:z-30'>
                                        <Image src={bookImage} alt='Book' width={150} height={280} className='rounded-lg shadow-xl border'/>
                                    </div>
                                    <div className='absolute top-4 left-20 z-10 transition-transform duration-300 hover:scale-110 hover:z-30'>
                                        <Image src={bookImage2} alt='Book' width={150} height={280} className='rounded-lg shadow-xl border'/>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="md:col-span-2 lg:col-span-3">
                             <CardHeader>
                                <CardTitle>Things I Enjoy</CardTitle>
                            </CardHeader>
                            <CardContent className="relative min-h-[250px]">
                                {hobbies.map((hobby) => (
                                    <div
                                    key={hobby.title}
                                    className='inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full absolute shadow-sm border'
                                    style={{ left: hobby.left, top: hobby.top }}
                                    >
                                    <span className='font-medium text-gray-950 text-sm'>{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
