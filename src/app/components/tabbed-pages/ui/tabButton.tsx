interface ButtonProps {
    text: string;
    isActive?: boolean;
    onClick?: () => void;
  }
  
  export default function Button({ text, isActive, onClick }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded transition-all border-2 bg-secondary text-white hover:cursor-pointer hover:scale-105 ${
          isActive ? 'border-indigo-600' : 'border-transparent text-black'
        }`}
      >
        {text}
      </button>
    );
  }
  