export function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((x) => (
        <span key={x} className="text-xs px-2 py-1 rounded-full border border-neutral-700">
          {x}
        </span>
      ))}
    </div>
  );
}
