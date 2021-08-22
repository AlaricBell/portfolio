import Navbar from '../base/Navbar'
import Head from 'next/head'
import Footer from '../base/Footer'

const Layout: React.FC = ({children}) => {
    const handleCoursor = (e: any) => {
        const cursor: any = document.getElementById("cursor-inner");
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY - window.pageYOffset + 'px';


        const cursorCircle: any = document.getElementById("cursor-outer");
        cursorCircle.style.left = e.pageX + 'px';
        cursorCircle.style.top = e.pageY - window.pageYOffset + 'px';

        const cursorCircle2: any = document.getElementById("cursor-outer2");
        cursorCircle2.style.left = e.pageX + 'px';
        cursorCircle2.style.top = e.pageY - window.pageYOffset + 'px';
    }

    const handleMouseDown = (e: any) => {
        const cursor: any = document.getElementById("cursor-inner");
        const cursorCircle: any = document.getElementById("cursor-outer");
        const cursorCircle2: any = document.getElementById("cursor-outer2");
        
        cursor.classList.add("mouseDown");
        cursorCircle.classList.add("mouseDown");
        cursorCircle2.classList.add("mouseDown");
    }

    const handleMouseUp = (e: any) => {
        const cursor: any = document.getElementById("cursor-inner");
        const cursorCircle: any = document.getElementById("cursor-outer");
        const cursorCircle2: any = document.getElementById("cursor-outer2");
        
        cursor.classList.remove("mouseDown");
        cursorCircle.classList.remove("mouseDown");
        cursorCircle2.classList.remove("mouseDown");
    }

    return (
        <div className="layout" onMouseMove={handleCoursor} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
            <div id="cursor-inner" ></div>
            <div id="cursor-outer"></div>
            <div id="cursor-outer2"></div>
            <Footer/>
        </div>
    )
}

export default Layout;