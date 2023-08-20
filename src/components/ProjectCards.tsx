import { Projects } from '../interfaces';
import { ExternalLinks, GithubIcon, YoutubeIcon } from './icons';
import AnimOnAppear from './AnimOnAppear';

function ProjectCards({
  title,
  excerpt,
  tags,
  demoUrl,
  srcUrl,
  linkYoutube,
  unFinished
}: Projects) {
  return (
    <article>
      <div className="flex">
        <h3 className="title h4 mb-1 flex">{title}</h3>

        {srcUrl && (
          <a 
            href={srcUrl}
            target='_blank'
            rel='noreferrer'
            className='ml-3 m-1'
          >
            <GithubIcon />
          </a>
        )}

        {demoUrl && (
          <a 
            href={demoUrl}
            className='m-1'
            target='_blank'
            rel='noreferrer'
          >
            <ExternalLinks />
          </a>
        )}

        {linkYoutube && (
          <a 
            href={linkYoutube}
            className='m-1'
            target='_blank'
            rel='noreferrer'
          >
            <YoutubeIcon />
          </a>
        )}

        {!unFinished && (
          <span className="m-1">
            ( progress )
          </span>
        )}
      </div>

      <p className='mb-4'>{excerpt}</p>
      <p className="text-pink-400">
        <TagList tags={tags} />
      </p>
    </article>
  )
}

export default ProjectCards

export function ProjectLists({ projects }: { projects: Projects[] }) {
  return (
    <ul className='my-6 md:my-12'>
      {projects.map((project, index) => (
        <li key={project.title}>
          <AnimOnAppear>{index > 0 &&  <hr className='my-6' /> }</AnimOnAppear>
          <AnimOnAppear>
            <ProjectCards {...project} />
          </AnimOnAppear>
        </li>
      ))}
    </ul>
  )
}

interface TagProps {
  tags: string[];
  max?: number;
}

const TagList = ({ tags, max }: TagProps) => (
  <code>
    {tags
      .slice(0, max || tags.length)
      .map((tag, i) => `${i > 0 ? ' ' : ''} #${tag}`)
    }
  </code>
)