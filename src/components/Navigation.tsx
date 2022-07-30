import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navigation = () => {
	const [active, setActive] = useState(false);
	const burgerTop = {
		initial: { x: 0, y: 0, rotate: 0 },
		hover: { x: -5, y: 0, rotate: 0 },
		initialActive: { x: 0, y: 3.5, rotate: 45 },
		hoverActive: { x: 0, y: 0, rotate: 0 },
	};
	const burgerBottom = {
		initial: { x: 0, y: 0, rotate: 0 },
		hover: { x: 5, y: 0, rotate: 0 },
		initialActive: { x: 0, y: -3.5, rotate: -45 },
		hoverActive: { x: 0, y: 0, rotate: 0 },
	};

	const navigation = {
		visible: {
			display: 'block',
			opacity: 1,
		},
		hidden: { opacity: 0, transitionEnd: { display: 'none' } },
	};
	return (
		<nav className="relative z-20">
			<motion.div
				animate={active ? 'visible' : 'hidden'}
				initial={false}
				variants={navigation}
				className="fixed top-0 h-screen w-full bg-orange-400 bg-opacity-80">
				<div className="flex  h-full w-full flex-col justify-between gap-3 bg-orange-400 px-5 pt-14 pb-5 md:px-3">
					<div className="flex flex-col gap-1 text-10 uppercase lg:text-8">
						<div
							onClick={() => {
								setActive(!active);
							}}>
							<Link href="/">
								<span className="cursor-pointer transition-all hover:text-gray-600">
									Home
								</span>
							</Link>
						</div>
						<div
							onClick={() => {
								setActive(!active);
							}}>
							<Link href="/p1">
								<span className="cursor-pointer transition-all hover:text-gray-600">
									Punkt1
								</span>
							</Link>
						</div>
						<div
							onClick={() => {
								setActive(!active);
							}}>
							<Link href="/p2">
								<span className="cursor-pointer transition-all hover:text-gray-600">
									Punkt2
								</span>
							</Link>
						</div>
						<div
							onClick={() => {
								setActive(!active);
							}}>
							<Link href="/p3">
								<span className="cursor-pointer transition-all hover:text-gray-600">
									Punkt3
								</span>
							</Link>
						</div>
					</div>

					<div className="flex justify-between">
						<div className="md:hidden">
							<p className="font-bold uppercase">Adresse</p>
							<p>
								<a href="https://goo.gl/maps/3svAnmMzUphYATyk6" target="_blank">
									Hermann-Niggemann-Straße 4 | 63846 Laufach
								</a>
							</p>
						</div>
						<div className="">
							<p className="font-bold uppercase">Mail</p>
							<p>
								<a href="mailto:projekt@mediaatrium.de">
									projekt@mediaatrium.de
								</a>
							</p>
						</div>
						<div className="">
							<p className="font-bold uppercase">Folge uns</p>
							<p>
								<a href="https://www.instagram.com/mediaatrium" target="_blank">
									Instagram
								</a>
							</p>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="fixed top-0 flex w-full items-center justify-between py-3 px-7 md:px-3">
				<div className="relative w-10 text-center"></div>
				<motion.div
					className="group cursor-pointer"
					onClick={() => {
						setActive(!active);
					}}
					initial={'initial'}
					whileHover={active ? 'hoverActive' : 'hover'}
					animate={active ? 'initialActive' : 'initial'}>
					<motion.div
						className="mb-[5px] h-[2px] w-4 bg-white shadow-sm"
						variants={burgerTop}></motion.div>
					<motion.div
						className="h-[2px] w-4 rounded-full bg-white shadow-sm"
						variants={burgerBottom}></motion.div>
				</motion.div>
			</div>
		</nav>
	);
};
export default Navigation;
