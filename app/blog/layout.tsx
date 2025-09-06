export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Section</h2>
      {children}
    </div>
  );
}
