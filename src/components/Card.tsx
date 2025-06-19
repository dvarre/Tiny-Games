export default function Card({path}:{path:string}) {
    return <div>
                <img
                src={path}
                alt="imagejeu"
                className="rounded-xl w-140 h-75 mx-auto"
                />
            </div>
  }