import TimeLine from "@/components/About/TimeLine";
import Calendar from "@/components/About/Calendar";
import { title } from "@/components/primitives";
import Chat from "../../components/About/Chat";
import Cart from "@/components/About/Cart";
import Comment from "@/components/About/Comment";
import Team from "@/components/About/Team";
import Table from "@/components/About/Table"
import Billing from "@/components/About/Billing";
import Product from "@/components/About/Product";
import Status from "@/components/About/Status";

export default function AboutPage() {
  return (
    <>
      <div className="flex gap-8 flex-wrap mb-20 justify-center">
        <TimeLine  />
        <Chat  />
        <Calendar  />
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        <Cart />
      </div>
      <div className="flex gap-8 mt-8 flex-wrap justify-center">
        <Comment />
        <Team />
      </div>
      <div className="flex gap-8 mt-8 flex-wrap justify-center">
       <Billing/>
       <Table/>
      </div>
      <div className="flex gap-1 mt-8 flex-wrap justify-center">
      <Product/>
      <Status/>
      </div>
    </>
  );
}
