import React from 'react';
import { TabPanel } from 'react-tabs';
import CodeEditorx from '../../../../components/CodeEditorx/CodeEditorx';
import TabsPanel from '../../../../components/TabsPanel/TabsPanel';
import LoginFormContent from './LoginFormContent';

const LoginForm = () => {
    const tabs = [
        { label: 'Preview' },
        { label: 'HTML' },
        { label: 'JSX' }
    ];

    return (
        <div className='p-5'>
            <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
            <TabsPanel tabs={tabs}>
                <TabPanel>
                    <LoginFormContent />
                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="Login Form HTML"
                        code={`
                        <div class="flex justify-center items-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
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
                    <CodeEditorx
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
            </TabsPanel>
        </div>
    );
};

export default LoginForm;

