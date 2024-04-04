import React from 'react';
import { TabPanel } from 'react-tabs';
import CodeEditorx from '../../../../components/CodeEditorx/CodeEditorx';
import TabsPanel from '../../../../components/TabsPanel/TabsPanel';

const RegisterForm = () => {
    const tabs = [
        { label: 'Preview' },
        { label: 'HTML' },
        { label: 'JSX' }
    ];

    return (
        <div className='p-5'>
            <h2 className="text-3xl font-bold mb-8 text-center">Registration</h2>
            <TabsPanel tabs={tabs}>
                <TabPanel>
                    <div className="container mx-auto mt-10">
                        <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                                <input type="text" id="username" name="username" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="profileImage" className="block text-gray-700 font-medium mb-2">Profile Image</label>
                                <input type="file" id="profileImage" name="profileImage" className="w-full border rounded py-2 px-3" />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Register</button>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="Login Form HTML"
                        code={`
                        
                        <div class="container mx-auto mt-10">
                        <form class="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label htmlFor="username" class="block text-gray-700 font-medium mb-2">Username</label>
                                <input type="text" id="username" name="username" class="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" class="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label htmlFor="password" class="block text-gray-700 font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" class="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label htmlFor="confirmPassword" class="block text-gray-700 font-medium mb-2">Confirm Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" class="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="mb-4">
                                <label htmlFor="profileImage" class="block text-gray-700 font-medium mb-2">Profile Image</label>
                                <input type="file" id="profileImage" name="profileImage" class="w-full border rounded py-2 px-3" />
                            </div>
                            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Register</button>
                        </form>
                    </div>

                    
            
            `}
                    />
                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="Login Form JSX"
                        code={`
                        <div className="container mx-auto mt-10">
                        <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                                <input type="text" id="username" name="username" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="profileImage" className="block text-gray-700 font-medium mb-2">Profile Image</label>
                                <input type="file" id="profileImage" name="profileImage" className="w-full border rounded py-2 px-3" />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Register</button>
                        </form>
                    </div>
            `}
                    />
                </TabPanel>
            </TabsPanel>
        </div>
    );
};

export default RegisterForm;

