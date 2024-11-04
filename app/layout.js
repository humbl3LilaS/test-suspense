import "./globals.css";


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <nav className={"w-screen h-[20vh] p-8"}>
            <div className={"w-full h-full flex items-center justify-center bg-blue-300 rounded-lg"}>
                <span className={"text-2xl text-white font-bold"}>Static</span>
            </div>
        </nav>
        <main>
            <div className={"flex gap-x-10 px-8"}>
                <div className={"w-1/5 h-[60vh] bg-green-300 rounded-lg"}>
                    <aside className={"w-full h-full flex flex-col items-center justify-center bg-green-300 rounded-lg"}>
                            <span className={"text-2xl text-black/80 font-bold"}>Static</span>
                    </aside>
                </div>
                <div className={"flex-1 h-[60vh]"}>{children}</div>
            </div>
        </main>
        <footer className={"w-screen h-[20vh] p-8"}>
            <div className={"w-full h-full flex items-center justify-center bg-gray-300  rounded-lg"}>
                <span className={"text-2xl text-black/50 font-bold"}>Static</span>
            </div>
        </footer>
        </body>
        </html>
    );
}
