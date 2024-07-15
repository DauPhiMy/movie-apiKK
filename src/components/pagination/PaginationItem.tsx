export default function PaginationItem({
  children,
}: {
  children: JSX.Element;
}) {
  return <div className="rounded-md bg-blue-300 px-3 py-1">{children}</div>;
}
