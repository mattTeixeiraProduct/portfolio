'use client'
import { IconButton } from "./button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function BackToTop() {
    return (
        <Link className="fixed bottom-4 right-4" href="#navbar">
            <IconButton className="bg-gray-300 dark:bg-gray-800" icon={<ArrowUp className="text-black dark:text-white" />} />
        </Link>
    )
};