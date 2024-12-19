function Footer() {
    return ( 
        <>
               <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
        </>
     );
}

export default Footer;