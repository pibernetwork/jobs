export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-1">
      <h2 className="text-xl">{title}</h2>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {children}
    </div>
  );
}
