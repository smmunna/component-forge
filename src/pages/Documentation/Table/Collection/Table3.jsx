import React, { useState } from 'react';
import { TabPanel } from 'react-tabs';
import CodeEditorx from '../../../../components/CodeEditorx/CodeEditorx';
import TabsPanel from '../../../../components/TabsPanel/TabsPanel';
import Pagination from '../../../../components/pagination/Pagination';

const Table3 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 100; // Example total pages

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Fetch data for the new page
    };
    const tabs = [
        { label: 'Preview' },
        { label: 'HTML' },
        { label: 'JSX' }
    ];

    return (
        <div className='p-5'>
            <h2 className="text-3xl font-bold mb-8 text-center">Table 3</h2>
            <TabsPanel tabs={tabs}>
                <TabPanel>
                    <div className="overflow-x-auto">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <table className="table-auto min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/64527538?v=4" alt="User avatar" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    Sm.Munna
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    smmunna@example.com
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Software Engineer</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Admin
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Sm.Munna@example.com
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/64527538?v=4" alt="User avatar" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    Sm.Munna
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Sm.Munna@example.com
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Software Engineer</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Admin
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Sm.Munna@example.com
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    </td>
                                </tr>
                                {/* More table rows can be added here */}
                            </tbody>
                        </table>
                        {/* Your Pagination component / logic you can add according to your own configuration */}
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </div>
                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="Table HTML"
                        code={`
<div class="overflow-x-auto">
<div class="mb-4">
<input
    type="text"
    placeholder="Search"
    class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
/>
</div>
<table class="table-auto min-w-full divide-y divide-gray-200">
<thead class="bg-gray-50">
<tr>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Name
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Title
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Status
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Role
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Email
    </th>
    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Actions
    </th>
</tr>
</thead>
<tbody class="bg-white divide-y divide-gray-200">
<tr>
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
        <img class="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/64527538?v=4" alt="User avatar"/>
        </div>
        <div class="ml-4">
        <div class="text-sm font-medium text-gray-900">
            Sm.Munna
        </div>
        <div class="text-sm text-gray-500">
            Sm.Munna@example.com
        </div>
        </div>
    </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">Software Engineer</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Active
    </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Admin
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Sm.Munna@example.com
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
</tr>
{/* More table rows can be added here */}
</tbody>
</table>
{/* Your Pagination component / logic you can add according to your own configuration */}
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
</div>
            `}
                    />
                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="Table JSX"
                        code={`
<div className="overflow-x-auto">
<div className="mb-4">
<input
type="text"
placeholder="Search"
className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
/>
</div>
<table className="table-auto min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Name
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Title
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Status
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Role
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Email
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Actions
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr>
<td className="px-6 py-4 whitespace-nowrap">
    <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/64527538?v=4" alt="User avatar" />
        </div>
        <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
                Sm.Munna
            </div>
            <div className="text-sm text-gray-500">
                smmunna@example.com
            </div>
        </div>
    </div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900">Software Engineer</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Active
    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Admin
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Sm.Munna@example.com
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
</td>
</tr>
<tr>
<td className="px-6 py-4 whitespace-nowrap">
    <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/64527538?v=4" alt="User avatar" />
        </div>
        <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
                Sm.Munna
            </div>
            <div className="text-sm text-gray-500">
                Sm.Munna@example.com
            </div>
        </div>
    </div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900">Software Engineer</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Active
    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Admin
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Sm.Munna@example.com
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
</td>
</tr>
{/* More table rows can be added here */}
</tbody>
</table>
{/* Your Pagination component / logic you can add according to your own configuration */}
<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
</div>
            `}
                    />

                </TabPanel>
            </TabsPanel>
        </div>
    );
};

export default Table3;

