const icons : { [key: string]: string }= {
    chevronLeft: '/icons/left-chevron.svg',
    chevronRight: '/icons/right-chevron.svg',
    twitchIcon: '/icons/twitch.svg',
  };
  
  export default function Icon({name}:{name:string}) {
    return <img src={icons[name]} alt={name} className="w-10 h-10 " />;
  }