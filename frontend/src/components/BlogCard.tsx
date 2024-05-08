import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string,
    content: string,
    publishedDate: string,
    id: number
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
         <div className="border-b p-4 border-slate-400 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>
                <div className="font-extralight ml-2">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin pb-2">
                {content.slice(0, 100) + "..."}
            </div>
            <div className=" text-slate-500 text-sm font-thin pb-3">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>
    </Link>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}


export function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className=" text-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}