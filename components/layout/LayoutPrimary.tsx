import Navbar from '../base/Navbar'
import Head from 'next/head'
import Footer from '../base/Footer'

const Layout: React.FC = ({children}) => {
    const handleCoursor = (e: any) => {
      const cursor: any = document.getElementById("cursor");
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';

      const cursorCircle: any = document.getElementById("cursor-circle");
      cursorCircle.style.left = e.pageX + 'px';
      cursorCircle.style.top = e.pageY + 'px';
    }

    return (
        <div className="layout" onMouseMove={handleCoursor}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
            <div id="cursor"></div>
            <div id="cursor-circle"></div>
            <Footer/>
        </div>
    )
}

export default Layout;