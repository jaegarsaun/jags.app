interface IProps {
    main: boolean
    isIcon: boolean;
    icon?: React.ReactNode;
    text: string;
    link: string;
}
export default function ActionButton({ main, icon, text, isIcon, link }: IProps) {

    function isMain() {
        return main ? 'bg-indigo-400' : 'bg-none border';
    }

    return (
        <a
            href={link}
            target="_blank"
            className={`${isMain()} rounded p-2 w-[10rem] text-white font-medium text-center hover:scale-125 hover:cursor-pointer transition-all flex items-center justify-center gap-2`}
        >
            {isIcon && icon}
            {text}
        </a>
    );
}