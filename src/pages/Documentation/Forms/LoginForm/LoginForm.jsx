import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CodeEditor from '../../../../components/codeEditor/CodeEditor';

const LoginForm = () => {
    return (
        <div className='p-5'>

            <Tabs className="">
                <TabList className="flex justify-center mb-4 bg-black rounded-t-lg">
                    <Tab className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">Preview</Tab>
                    <Tab className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">HTML</Tab>
                    <Tab className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">JSX</Tab>
                </TabList>


                <TabPanel className={``}>
                    <div className="all-center">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
                            <h2 className="text-2xl font-semibold mb-4">Login</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <CodeEditor
                        title="Login Form JSX"
                        code={`
                    <div className="flex justify-center items-center">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
                            <h2 className="text-2xl font-semibold mb-4">Login</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    +
                                        Username
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    `}
                    />
                </TabPanel>
                <TabPanel>
                    <CodeEditor
                        title="Login Form JSX"
                        code={`
                    <div className="flex justify-center items-center">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
                            <h2 className="text-2xl font-semibold mb-4">Login</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    `}
                    />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default LoginForm;
