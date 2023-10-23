import AnimOnAppear from '../components/AnimOnAppear';
import Layout from '../components/Layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useLocalization from "../hooks/useLocalization";
import { ProjectLists } from '../components/ProjectCards';
import { designProjects, publicProjects, submissionProject } from '../projects';
import Marquee from '../components/Marquee';
import { tools } from '../config';

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

        <Section title='public'>
          <ProjectLists projects={publicProjects} />
        </Section>

        <Section title='submissions'>
          <ProjectLists projects={submissionProject} />
        </Section>

        <Section title='design'>
          <ProjectLists projects={designProjects} />
        </Section>
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <section className='my-12 md:my-20'>
          <h2 className='text-5xl mb-7 tracking-normal'>
            Tools I Use
          </h2>
          <div className='max-w-7xl'>
            <Marquee
              pauseOnHover 
              speed={40} 
            >
              {tools.map(({ src, alt }, index) => (
                <img
                  key={`logo-${alt}-${index}`}
                  src={src}
                  title={alt[0].toUpperCase() + alt.substring(1)}
                  alt={`logo-${alt}-company`}
                  width={80}
                  height={80}
                  className='object-cover py-1.5 mx-1 px-3 rounded hover:bg-zinc-800 transition-colors'
                />
              ))}
            </Marquee>
          </div>
        </section>
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
    <code title={category} className="text-violet-400">{`'${category}'`}</code>
    <code className="text-gray-50">)</code>
  </pre>
)