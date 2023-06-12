import AnimOnAppear from "../components/AnimOnAppear"
import Layout from "../components/Layout"
import useDocumentTitle from "../hooks/useDocumentTitle"
import useLocalization from "../hooks/useLocalization";

function Me() {
  useDocumentTitle('Me');

  const {
    pages: { mePage }
  } = useLocalization();
  return (
    <Layout>
      <div className="max-w-4xl mx-auto w-full p-4">
        <AnimOnAppear>
          <section className="my-24">
            <h1 className="title h1_contact text-glow mb-4 tracking-tighter">
              {mePage.title}
            </h1>
            <p className="h3 max-w-2xl subtitle mb-4">
              {mePage.description}
            </p>
            <AnimOnAppear direction="bottom">
              <p className="h3 subtitle mb-4">
                {mePage.description2}
              </p>
            </AnimOnAppear>
          </section>
        </AnimOnAppear>
      </div>
    </Layout>
  )
}

export default Me