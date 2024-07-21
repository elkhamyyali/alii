import Blog from "@/components/Pricing/Blog";
import Cards from "@/components/Pricing/Cards";
import Customize from "@/components/Pricing/Customize";
import Images from "@/components/Pricing/Images";
import Last from "@/components/Pricing/Last";
import Price from "@/components/Pricing/Price";
import { title } from "@/components/primitives";

export default function PricingPage() {
	return (
		<div>
			<Images/>
			<Cards/>
			<Customize/>
			<Blog/>
			<Last/>
			<Price/>
		</div>
	);
}
