import AnimOnAppear from "../components/AnimOnAppear";
import Layout from "../components/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useLocalization from "../hooks/useLocalization";

function Home() {
  useDocumentTitle('Rahmad Nasution');

  const {
    pages: { homePage }
  } = useLocalization();
  return (
    <Layout>
      <AnimOnAppear className="max-w-4xl px-4 m-auto" direction="right">
        <h1 className="h1 title h1-effect mb-14">{homePage.title}</h1>
        <h2 className="h3 subtitle mb-3 relative">{homePage.description}</h2>
      </AnimOnAppear>
    </Layout>
  )
}

export default Home