"use client";
import React, { useEffect } from "react";
import PropsTable from "@/components/Docs/PropsData";
import { CheckLinearIcon } from "@/components/icons";
import { header, subtitle, title } from "@/components/primitives";
import { Components } from "@/utils/Docs/Components";
import {
  Button,
  Code,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
} from "@nextui-org/react";
import { useClipboard } from "@/Hooks/useClipbpard";

function Page({ params }: { params: any }) {
  const [isOpen, setIsOpen] = React.useState(false);

  let label = params?.id;
  const componentInfo =
    label === "Installation" || label === "Introduction"
      ? null
      : getComponentInfoByName(label);

  function getComponentInfoByName(componentName: any) {
    const component = Components.find((c) => c.name === componentName);
    return component || null;
  }
  const { copy, copied } = useClipboard();

  function HandleCopy(value: string) {
    copy(value);
  }

  useEffect(() => {
    setTimeout(() => {
      if (copied) {
        setIsOpen(false);
      }
    }, 2000);
  }, [copied]);

  return (
    <>
      {label === "Installation" || label === "Introduction" ? (
        <>
          {label === "Introduction" && (
            <>
              <h2 className={title()}>{label}</h2>
              <Spacer y={20} />
              <h2 className={title({ size: "sm" })}>What is io-elements?</h2>
              <Spacer y={3} />
              <h2 className={header()}>
                {`IO-ELEMENTS Custom Components Package is a comprehensive collection of pre-built UI components specifically designed for mobile app development using React Native or Expo. This package offers developers a convenient and efficient way to quickly build high-quality, cross-platform mobile applications with ease. This package offers a wide range of ready-to-use components that can be seamlessly integrated into React Native projects, saving developers valuable time and effort. It's like your React Native template.`}
              </h2>
              Contributing
              <Spacer y={20} />
              <h2 className={title({ size: "sm" })}>Contributing</h2>
              <Spacer y={3} />
              <h2 className={header()}>
                io-elements is not yet available for open source.
              </h2>
            </>
          )}
          {label === "Installation" && <>Hello</>}
        </>
      ) : (
        <>
          {/* Name */}
          <h2 className={title()}>{componentInfo?.name}</h2>
          <Spacer y={6} />
          {/* Description */}
          <h2 className={header({})}>{componentInfo?.description}</h2>
          <Spacer y={6} />
          <Divider className="my-4" />
          {/* Import  */}
          <div className="flex flex-col gap-6">
            <h2 className={title({ size: "sm" })}>Import</h2>
            <Code className="md:w-1/2" size="lg" color="success">
              <div className="flex flex-row justify-between items-center">
                <h2>{`import { ${componentInfo?.name} } from io-elements`}</h2>
                <div className="flex flex-col gap-2">
                  <Popover
                    isOpen={isOpen}
                    onOpenChange={(open) => setIsOpen(open)}
                  >
                    <PopoverTrigger>
                      <Button
                        variant="light"
                        onClick={() =>
                          HandleCopy(
                            `import { ${componentInfo?.name} } from io-elements`
                          )
                        }
                      >
                        <CheckLinearIcon size={16} data-visible={true} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="">
                        <div className="text-small font-bold">Copied</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                {/* <Popover
                  isOpen={isOpen}
                  onOpenChange={(open) => setIsOpen(open)}
                >
                  <PopoverTrigger>
                    <CheckLinearIcon size={16} data-visible={true} />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-small font-bold">
                        Popover Content
                      </div>
                      <div className="text-tiny">
                        This is the popover content
                      </div>
                    </div>
                  </PopoverContent>
                </Popover> */}
              </div>
            </Code>
          </div>
          <Spacer y={6} />
          <Divider className="my-4" />
          {/* Example  */}
          <div className="flex flex-col h-unit-9xl gap-6">
            <h2 className={title({ size: "sm" })}>Usage</h2>
            <iframe
              src={componentInfo?.usageLink}
              style={{ width: "100%", height: "100%", border: "0" }}
              sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
          <Spacer y={6} />
          <Divider className="my-4" />
          {/* Props */}
          <div className="flex flex-col h-unit-9xl gap-6">
            <h2 className={title({ size: "sm" })}>Props</h2>
            <PropsTable Data={componentInfo?.Props} />
          </div>
        </>
      )}
    </>
  );
}

export default Page;
