interface EventCardProps {
  title: string;
  describe: string;
  data: string;
  estado: string;
  cidade: string;
}

export function EventCard({
  title,
  describe,
  data,
  estado,
  cidade,
}: EventCardProps) {
  return (
    <div className="bg-slate-100 rounded-lg p-6 shadow-md border cursor-pointer">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
          <span>{data}, </span>
          <span>
            {estado} - {cidade}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{describe}</p>
    </div>
  );
}
