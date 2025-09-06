import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
  {
    id: 'kanban-board',
    title: 'Kanban Board',
    description: 'A task management app built with React and Redux.',
    link: 'https://github.com/yourusername/kanban-app',
  },
  // add more
];
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        {projects?.map((proj:any) => (
          <li key={proj.id} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p>{proj.description}</p>
            <Link
              href={`/projects/${proj.id}`}
              className="text-blue-600 underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
