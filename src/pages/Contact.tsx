import AnimOnAppear from "../components/AnimOnAppear"
import Layout from "../components/Layout"
import Tooltip from "../components/Tooltip";
import { siteMetadata, socialMenu } from "../config"
import useDocumentTitle from "../hooks/useDocumentTitle"

function Contact() {
  useDocumentTitle('Say hello to Rahmad');
  
  return (
    <Layout>
      <AnimOnAppear className="max-w-4xl mx-auto my-12 p-4">
        <h1 className="title h1 mb-4">
          <span className="pb-3 inline-block">🤙</span>
          <br />
          Say Hello --
        </h1>
        <h2 className="subtitle h3 mb-4">
          Tell me about React, and Typescript
        </h2>
        <ul className="h3 mb-4">
          <li>
            <Tooltip placement="left" content='Email' style="light">
              <a href={`mailto:${siteMetadata.mail}`}>{siteMetadata.mail}</a>
            </Tooltip>
          </li>
          {socialMenu.map(({ label, link }) => (
            <li key={link}>
              <Tooltip 
                placement="left" 
                content={label.charAt(0).toUpperCase() + label.slice(1)}
                style="light"
              >
                <a href={link} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </AnimOnAppear>
    </Layout>
  );
};

export default Contact