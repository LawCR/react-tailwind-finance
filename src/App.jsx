import { useState } from "react"

function App() {
    const [courseSelected, setCourseSelected] = useState('UI/UX Design')
    const courseData = [
        {
            id: 1,
            name: 'UI/UX Design',
            tasks: 24
        },
        {
            id: 2,
            name: 'Art and Sketch',
            tasks: 10
        },
        {
            id: 3,
            name: 'Marketing Ads',
            tasks: 20
        },
    ]

    return (
        <div className="h-screen w-screen grid grid-cols-12">
            {/* Left */}
            <div className="bg-red-500 col-span-2 hidden sm:block"></div>
            {/* Center */}
            <div className="bg-gray-100 col-span-12 sm:col-span-8 px-3 sm:px-8">
                {/* Header */}
                <nav className="bg-transparent py-3 flex justify-between items-center">
                    <div className="text-gray-800">
                        <h1 className="text-lg font-bold">Hello Alvaro</h1>
                        <p className="text-xs font-extralight">Welcome back!</p>
                    </div>
                    <div className="flex">
                        <input 
                            type="text" name="search" id="search" placeholder="Search"
                            className="outline-none p-2 rounded-lg text-gray-800 text-sm hover:bg-gray-200"
                        />
                    </div>
                </nav>
                <section>
                    <div className="grid grid-cols-2 sm:grid-cols-3 py-2 gap-4">
                        {
                            courseData.map(({id, name, tasks}) => (
                                <div 
                                    key={id}
                                    className={`${courseSelected === name ? 'bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500' : 'bg-white hover:bg-gray-200'} h-32 rounded-2xl flex justify-center items-center gap-x-4 py-1 sm:py-2 px-4 sm:px-6 cursor-pointer`}
                                    onClick={() => setCourseSelected(name) }
                                >
                                    <div className="bg-gray-800 h-12 w-12 rounded-full"></div>
                                    <div className={`flex-1 flex flex-col gap-y-1 ${courseSelected === name ? 'text-white' : 'text-gray-800'}`}>
                                        <h2 className="text-lg font-bold">{name}</h2>
                                        <p className="text-sm font-extralight">{tasks} Tasks</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-transparent py-3 flex justify-between items-center">
                        <div className="text-gray-800">
                            <h1 className="text-lg font-bold">Project</h1>
                        </div>
                        <div className="flex gap-x-2">
                            <button className="bg-white rounded-md md:rounded-md px-2 py-1 mt-2 hover:bg-gray-200">Ongoing</button>
                            <button className="bg-white rounded-md md:rounded-md px-2 py-1 mt-2 hover:bg-gray-200">Pending</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 py-2 gap-4">
                        {
                            courseData.map(({id, name, tasks}) => (
                                <div 
                                    key={id}
                                    className={`${courseSelected === name ? 'bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500' : 'bg-white hover:bg-gray-200'} h-32 rounded-2xl flex justify-center items-center gap-x-4 py-1 sm:py-2 px-4 sm:px-6 cursor-pointer`}
                                    onClick={() => setCourseSelected(name) }
                                >
                                    <div className="flex-auto flex justify-center w-1/5">
                                        <div className=" bg-gray-800 h-12 w-12 rounded-full"></div>
                                    </div>
                                    <div className={`flex-auto w-3/5 flex flex-col gap-y-1 ${courseSelected === name ? 'text-white' : 'text-gray-800'}`}>
                                        <h2 className="text-lg font-bold">{name}</h2>
                                        <p className="text-sm font-extralight">{tasks} Tasks</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
            {/* Right */}
            <div className="bg-purple-500 col-span-2 hidden sm:block"></div>
            















            {/* <nav className="bg-blue-500 px-6 py-3 flex justify-between items-center h-12">
                <h1 className="text-gray-50 font-bold text-lg">Hello world</h1>
                <h2 className="text-gray-50 text-lg">Menu</h2>
            </nav>
            <section className="h-4/5 flex justify-center items-center text-gray-50 ">
                <div className="h-64 md:h-64 w-full md:w-96 p-2 flex flex-col justify-around">
                    <h1 className="font-bold text-xl text-center">Iniciar Sesión</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Correo:</label>
                        <input 
                            type="email" name="email" id="email" 
                            className="outline-none p-2 rounded-md text-gray-800 text-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">Password:</label>
                        <input 
                            type="password" name="password" id="password" 
                            className="outline-none p-2 rounded-md text-gray-800 text-sm"
                        />
                    </div>
                    <p className="text-blue-300 text-sm font-light m-1 cursor-pointer hover:text-blue-400 block">¿No tienes una cuenta?</p>
                    <button className="bg-red-700 md:bg-blue-700 rounded-md md:rounded-md p-1 mt-2 hover:bg-blue-600">Ingresar</button>
                </div> 
            </section> */}
        </div>
    )
}

export default App
