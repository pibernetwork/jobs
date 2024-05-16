export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-1">
      <h2 className="text-base font-bold leading-tight">{title}</h2>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {children}
    </div>
  );
}
