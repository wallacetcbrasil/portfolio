// src/components/Badge.tsx
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full border border-neutral-700">
      {children}
    </span>
  );
}
