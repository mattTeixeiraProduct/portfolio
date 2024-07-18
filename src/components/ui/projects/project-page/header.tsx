import Image from "next/image";
import { Dot } from "lucide-react";

type HeaderItem = {
    heading: string;
    body: string | { copy1: string; copy2: string };
    image: string;
};

export default function ProjectHeader({ header, width, height }: { header: HeaderItem[], width: number, height: number }) {
    return (
        <div className="w-full flex flex-row gap-0 z-0 py-20 px-40" id="header">
            {header.map((item, index) => (
                <div key={index} className="w-full flex flex-col text-center items-center gap-5">
                    <div className="relative rounded-3xl w-fit h-fit">
                        <Image src={item.image} alt={item.heading} width={width} height={height} className="rounded-3xl" />
                    </div>
                    <h3 className="text-2xl font-medium">{item.heading}</h3>
                    <div className="flex flex-col">
                        {typeof item.body === 'string' ? (
                            <p>{item.body}</p>
                        ) : (
                            <>
                                <div className="flex flex-row items-start">
                                    <Dot className="mr-2" /> <p className="text-start">{item.body.copy1}</p>
                                </div>
                                <div className="flex flex-row items-start">
                                    <Dot className="mr-2" /> <p className="text-start">{item.body.copy2}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}