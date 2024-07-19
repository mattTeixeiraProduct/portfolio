'use client';
import ImageOverlay from "@/components/ui/image-overlay";
import { SectionHeading } from "@/components/typography/typography";
import withRevealOnScroll from "@/components/animations/reveal-on-scroll";
import { Body, Title } from "@/components/typography/typography";

type Props = {
    sectionHeading: string,
    title: string,
    body1: string,
    body2: string,
    body3?: string,
    image: string
}
function ProblemComponent({ sectionHeading, title, body1, body2, body3, image }: Props) {
    return (
        <div className="flex flex-row gap-8 p-20" id="overview">
           <SectionHeading>{sectionHeading}</SectionHeading>
            <div className="flex flex-col gap-8 items-start w-full">
                <Title>{title}</Title>
                <Body>{body1}</Body>
                <ImageOverlay src={image} alt={title} width={1000} height={400} />
                <Body>{body2}</Body>
                {body3 && <Body>{body3}</Body>}
            </div>
        </div>
    );
}

export default withRevealOnScroll<React.ComponentType<Props>>(ProblemComponent);