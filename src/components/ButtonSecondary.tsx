export default function ButtonSecondary({text, href}:{text:string, href?:string}) {
    return <a href={href}
        className="inline-block text-lg text-white
        border-solid border-2 border-red px-24 py-1 mt-4
        bg-gradient-to-r from-red-400 via-orange-200 to-rose-500 
        hover:bg-none hover:bg-red/90 
        rounded-lg transition-all duration-500 bg-red/50">
            {text}
            </a>;
  }