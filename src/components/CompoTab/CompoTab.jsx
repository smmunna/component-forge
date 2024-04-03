import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CodeEditor from '../codeEditor/CodeEditor';
import parse from 'html-react-parser';

const CompoTab = ({ fcode, htmlcode, jsxcode }) => {
    return (
        <div>
            <div className='p-5'>

                <Tabs className="">
                    <TabList className="flex justify-center mb-4 bg-black rounded-t-lg">
                        <Tab className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">Preview</Tab>
                        <Tab className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">HTML</Tab>
                        <Tab className="px-6 py-2 text-white hover:bg-gray-700 cursor-pointer">JSX</Tab>
                    </TabList>


                    <TabPanel className={``}>
                        <div className="all-center" >
                           { parse(`${fcode}`)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <CodeEditor
                            title="Login Form JSX"
                            code={htmlcode}
                        />
                    </TabPanel>
                    <TabPanel>
                        <CodeEditor
                            title="Login Form JSX"
                            code={jsxcode}
                        />
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default CompoTab;