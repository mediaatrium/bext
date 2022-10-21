import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import '../utils/globals.css';
import Footer from '../components/Footer';

const App = ({ Component, pageProps, router }) => (
	<>
		<Head>
			<title>Bext</title>
			<meta
				name="description"
				content="A boilerplate for Websites built with Next.js"
			/>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<AnimatePresence mode="wait">
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				key={router.route}>
				<Component {...pageProps} />
			</motion.main>
		</AnimatePresence>
		<Footer />
	</>
);
export default App;
