import { JSX } from "preact";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export function Button({ isActive, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {isActive ? "Ocultar Experiencia" : "Mostrar Experiencia"}
    </button>
  );
}
