// app/projects/[id]/page.tsx

const projects = [
  {
    id: 'kanban-board',
    title: 'Kanban Board',
    description: 'A task management app built with React and Redux.',
    link: 'https://github.com/yourusername/kanban-app',
  },
  // add more
];

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-600 underline"
      >
        View Project
      </a>
    </div>
  );
}
