import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "E-commerce Store",
    description:
      "This Store website is using NextJS and Sanity CMS. And I using Stripe for payment purposes. If you are planning to create an E-commerce store, then consider using NextJS and Sanity CMS, two powerhouses that can make your life a lot easier. NextJS enables developers to build server-rendered React applications with ease, while Sanity CMS allows for easy content and data management.",
    image: "/1-ecom-store.png",
    github: "https://github.com/Saaidin/ecommerce_sanity_stripe_p18",
    link: "https://ecommerce-sanity-stripe-p18.vercel.app",
  },
  {
    name: "E-commerce - Pizza Store",
    description:
      "This is simple website using Next.JS, Tailwind CSS and Contentful CMS. This Pizza Stores website comprise of components such as header, footer, card, etc. I must keep remember on how to make slug endpoint, getStaticProps, getStaticPaths, getServerProps, etc. It hard to remember since there are a lot way to do it, but must choose the way that working for me. I can also refer to ChatGPT and ask to explain about all this code.",
    image: "/2-ecom-pizza-store.png",
    github: "https://github.com/Saaidin/next-contentful",
    link: "https://next-contentful-saaidin.vercel.app",
  },
  {
    name: "E-commerce - Food Store",
    description:
      "This Food Store website is using ReactJS and Tailwind CSS. With JSON data, we can retrieve a food photos and it's particular. With Tailwind, we can design a layout and integrate with those data using ReactJS. If you want to create an E-commerce store in today's world, using ReactJS and Tailwind CSS can help you develop a highly customizable website and integrate with various payment technologies like Stripe ensuring seamless and efficient transactions.",
    image: "/3-ecom-burger-store.png",
    github: "https://github.com/Saaidin/food-reactjs-twcss-p13",
    link: "https://saaidin-food-p13.netlify.app",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
