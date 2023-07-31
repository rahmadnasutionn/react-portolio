import { socialMenu } from "../../config"
import AnimOnAppear from "../AnimOnAppear"
import Tooltip from "../Tooltip"

function Footer() {
  return (
      <AnimOnAppear direction="bottom">
        <footer className="w-full px-6 py-6 max-w-7xl mx-auto">
        <nav>
            <ul className="flex justify-end">
            {socialMenu.map(({ label, link }) => (
                <li key={link} className="uppercase">
                  <Tooltip content={label} style="light">
                    <a 
                      href={link}
                      target="_blank"
                      rel="norefferer"
                      className="font-mono px-2"
                    >
                      {label}
                    </a>
                  </Tooltip>
                </li>
            ))}          
            </ul>
        </nav>
        </footer>
      </AnimOnAppear>
  )
}

export default Footer