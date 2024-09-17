import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                MernEats.com
            </span>
            <div className="text-white font-bold tracking-tight flex gap-4">
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms of Services</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer;