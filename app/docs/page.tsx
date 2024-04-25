import Fifth from "@/components/Docs/Fifth";
import Final from "@/components/Docs/Final";
import First from "@/components/Docs/First";
import Fourth from "@/components/Docs/Fourth";
import Invoices from "@/components/Docs/Invoices";
import Second from "@/components/Docs/Second";
import Third from "@/components/Docs/Third";

export default function DocsPage() {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-center">
          <First />
          <Invoices />
        </div>

        <Second />
        <Third />
        <Fourth />
        <Fifth />

        <Final />
      </div>
    </>
  );
}
