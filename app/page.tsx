import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Unlock&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>the Power&nbsp;</h1>
        <br />
        <h1 className={title()}>of React Native UI Development with </h1>
        <br />
        <h1 className={title({ color: "violet" })}>&nbsp;io-elements&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          fast and modern UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          // isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
