import { CloudLightningIcon } from "./Icons";

interface CardProps {
    icon: JSX.Element
    title: string
    describe: string
}

export function Card(
    {
        icon,
        title,
        describe
    }: CardProps
) {
  return (
    <div className="bg-slate-100 rounded-lg p-6 shadow-md border cursor-pointer">
      {icon}
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{describe}</p>
    </div>
  );
}
