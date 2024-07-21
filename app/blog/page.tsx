import Descr from "@/components/Blog/Descr";
import Form from "@/components/Blog/Form";
import List from "@/components/Blog/List";
import Product from "@/components/Blog/Product";
import QuickView from "@/components/Blog/QuickView";
import Stacked from "@/components/Blog/Stacked";

export default function BlogPage() {
  return (
    <>
      <div className="">
        <div className="">
          <Product />
        </div>
        <div>
          <QuickView />
        </div>
        <div>
          <List />
        </div>
        <div>
          <Descr />
        </div>
        <div className="flex justify-around flex-wrap">
          <Form />
          <Stacked />
        </div> 
      </div>
    </>
  );
}
