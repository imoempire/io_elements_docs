import DashboardNavLink from "@/components/Docs/DashboardNavLink";
import { subtitle } from "@/components/primitives";

const DashboardLayout = ({ children }: { children: any }) => {
  let links = [
    { id: 1, label: "Introduction" },
    { id: 2, label: "Installation" },
  ];
  let links2 = [
    { id: 1, label: "Button" },
    { id: 2, label: "Card" },
    { id: 3, label: "Modal" },
    { id: 4, label: "Selector" },
  ];
  return (
    <div className="flex gap-8">
      <aside className="flex-[2]">
        <nav>
          <ul className="grid gap-3">
            <h2 className={subtitle({ class: "mt-4" })}>Guide</h2>
            {links?.map((item) => (
              <li key={item?.id}>
                <DashboardNavLink href={`/docs/${item?.label}`}>
                  {item?.label}
                </DashboardNavLink>
              </li>
            ))}
          </ul>
          <ul className="grid gap-3">
            <h2 className={subtitle({ class: "mt-4" })}>Components</h2>
            {links2?.map((item) => (
              <li key={item?.id}>
                <DashboardNavLink href={`/docs/${item?.label}`}>
                  {item?.label}
                </DashboardNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex-[8] p-4 rounded h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
