  export default function ButtonPrimary({text, href}:{text:string, href:string}) {
    return <a href={href}
        className="inline-block text-3xl font-tan text-white
        border-solid border-2 border-purple px-24 py-1 mt-4
        bg-gradient-to-r from-sky-200 via-purple-200 to-violet-300 
        hover:bg-none hover:bg-purple
        rounded-full transition-all duration-500 bg-purple/50">
            {text}
            </a>;
  }