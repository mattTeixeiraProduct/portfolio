
import Image from "next/image";
import projects from "@/lib/projects";
import { Dot, Info, Goal } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

type Props = {
    projectName: string;
    valueProp1: string;
    valueProp2: string;
    image: string;
    tags: string[];
    href: string;
}

const ProjectCard = ({ projectName, valueProp1, valueProp2, image, tags, href }: Props) => {
    return (
        <Link href={href} className="w-full">
            <div
                className="w-full h-screen hover:bg-black/5 dark:hover:bg-white/5 border-y-2 border-t-gray-200 dark:border-t-gray-800 flex flex-col md:flex-row gap-10 md:gap-5 justify-between p-4 transition-transform duration-300">
                <div className="flex flex-col justify-between items-start">
                    <div className="flex flex-col gap-12">
                        <h2 className="text-2xl md:text-3xl font-medium">{projectName}</h2>
                        <div className="flex flex-col gap-4">
                            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"><Info className="mr-1 text-gray-500 dark:text-gray-500" />{valueProp1}</span>
                            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm"><Goal className="mr-1 text-gray-500 dark:text-gray-500" />{valueProp2}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <Fragment key={tag}>
                                <span className="text-gray-400 dark:text-gray-500">{tag}</span>
                                {index < tags.length - 1 && <Dot className="text-gray-400 dark:text-gray-600" />}
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className="w-full h-full relative">
                    <Image src={image} alt={projectName} fill />
                </div>
            </div>
        </Link>
    );
};

const ProjectCardWrapper = () => {

    return (
        <div className="flex flex-col gap-4 w-full items-center justify-center">
            {projects.map((project) => (
                <ProjectCard
                    {...project}
                    key={project.projectName}
                />
            ))}
        </div>
    );
};

export default ProjectCardWrapper;