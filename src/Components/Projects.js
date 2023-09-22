import React from 'react';
function Projects(props) {
    console.log(props)
    return <>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://th.bing.com/th/id/OIP.E5XRsXOXAY5pFnhMKDoU8gHaEo?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">Card 3</h2>
                            A creative and exciting project description goes here. You can include details about your project.A creative and exciting project description goes here. You can include details about your project.
                            <div className="flex flex-wrap-reverse">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            </div>
                            <p className="text-gray-600"></p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
                                Button
                            </button>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    </>

}

export default Projects;