import Head from "next/head"
import { Metadata } from "next"

import HomePage from "./components/HomePage/Home"
import MealsPage from "./components/MealsPage/Meals"
import PlansPage from "./components/PlansPage/Plans"
import CustomerPage from "./components/CustomerPage/Customer"
import About from "./components/AboutPage/About"
import FooterPage from "./components/FooterPage/Footer"
import Navbar from './components/Navbar/Navbar'

export const metadata: Metadata = {
	title: "Foodoe."
}

export default function Home() {
	return (
		<>

			<Head>
				<link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
			</Head>

			<Navbar />
			<HomePage/>
			<MealsPage/>
			<PlansPage/>
			{/* <CustomerPage/> */}
			<About />
			<FooterPage/>
		</>
	)
}
