import AnimOnAppear from '../components/AnimOnAppear';
import Layout from '../components/Layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useLocalization from "../hooks/useLocalization";
import { ProjectLists } from '../components/ProjectCards';
import projects from '../projects';

function ProjectsPage() {
  useDocumentTitle('Projects');

  const {
    pages: { projectPage }
  } = useLocalization();
  return (
    <Layout backgroundIndex={8}>
      <div className="max-w-4xl mx-auto p-4 w-full">
        <AnimOnAppear direction='top'>
          <section className="my-12 md:my-24">
            <h1 className="title text-glow h1 mb-4 tracking-tight">
              {projectPage.title}
            </h1>
            <p className="h3 subtitle mb-4">
              {projectPage.description}
            </p>
          </section>
        </AnimOnAppear>

        <Section title='featured'>
          <ProjectLists projects={projects} />
        </Section>
      </div>
    </Layout>
  )
}

export default ProjectsPage;

interface SectionProps {
  title: string;
  children: typeof ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className='my-12 md:my-24'>
    <AnimOnAppear>
      <div className="text-gray-50 h3 mb-4">
        <CodeTitle category={title} />
      </div>
    </AnimOnAppear>
    {children}
  </section>
);

const CodeTitle = ({ category }: { category: string }) => (
  <pre className="flex flex-wrap">
    <code className='text-violet-400 mr-2 md:mr-4'>{'->'}</code>
    projects
    <code className="text-gray-50">(</code>
    <code className="text-violet-400">{`'${category}'`}</code>
    <code className="text-gray-50">)</code>
  </pre>
)