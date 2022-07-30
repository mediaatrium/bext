import Image from 'next/image';
import Navigation from '../components/Navigation';
import { logo } from '../utils/images';

const Index = () => (
	<section className="flex h-screen flex-col items-center justify-center space-y-1">
		<Navigation />
		<div className="w-20">
			<Image src={logo} />
		</div>
		<h1 className="is-5 font-bold">bext</h1>
		<p>A boilerplate for websites built with Next.js</p>
	</section>
);
export default Index;
