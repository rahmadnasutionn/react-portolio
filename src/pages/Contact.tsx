import AnimOnAppear from "../components/AnimOnAppear"
import Layout from "../components/Layout"
import { siteMetadata, socialMenu } from "../config"
import useDocumentTitle from "../hooks/useDocumentTitle"

function Contact() {
  useDocumentTitle('Say hello to Rahmad');
  
  return (
    <Layout>
      <AnimOnAppear className="max-w-4xl mx-auto my-12 p-4">
        <h1 className="title h1_contact mb-4">
          <span className="pb-3 inline-block">🤙</span>
          <br />
          Say Hello --
        </h1>
        <h2 className="subtitle h3 mb-4">
          Tell me about React, and Typescript
        </h2>
        <ul className="h3 mb-4">
          <li>
            <a href={`mailto:${siteMetadata.mail}`}>{siteMetadata.mail}</a>
          </li>
          {socialMenu.map(({ label, link }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </AnimOnAppear>
    </Layout>
  )
}

export default Contact