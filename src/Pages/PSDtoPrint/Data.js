import React from 'react';

const Data = () => {
    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
            <h2 className="mb-3 text-2xl font-semibold leading-tight text-center">Your Total Marketing Details</h2>
            <h2 className="mb-3 text-sm font-semibold leading-tight text-center">Robi Narikelbaria Branch, Jhenaidah</h2>
            <h2 className="mb-3 text-sm font-semibold leading-tight text-center">Power By Rubel Hossain</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-700">
                        <tr className="text-right">
                            <th title="Ranking" className="p-3 text-left">#</th>
                            <th title="Team name" className="p-3 text-left">Team</th>
                            <th title="Wins" className="p-3">W</th>
                            <th title="Losses" className="p-3">L</th>
                            <th title="Win percentage" className="p-3">Win%</th>
                            <th title="Games behind" className="p-3">GB</th>
                            <th title="Home games" className="p-3">Home</th>
                            <th title="Away games" className="p-3">Away</th>
                            <th title="Last 10 games" className="p-3">L10</th>
                            <th title="Current streak" className="p-3">Streak</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                            <td className="px-3 py-2 text-left">
                                <span>1</span>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <span>MIA</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>31</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>17</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>.646</span>
                            </td>
                            <td className="px-3 py-2 text-right">
                                <span>0</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>17-5</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>14-12</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>8-2</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>W2</span>
                            </td>
                        </tr>
                        <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                            <td className="px-3 py-2 text-left">
                                <span>2</span>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <span>CHI</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>30</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>17</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>.638</span>
                            </td>
                            <td className="px-3 py-2 text-right">
                                <span>0.5</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>17-6</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>13-11</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>4-6</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>W2</span>
                            </td>
                        </tr>
                        <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                            <td className="px-3 py-2 text-left">
                                <span>11</span>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <span>NYK</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>23</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>26</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>.469</span>
                            </td>
                            <td className="px-3 py-2 text-right">
                                <span>8.5</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>12-14</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>11-12</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>4-6</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>L2</span>
                            </td>
                        </tr>
                        <tr className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                            <td className="px-3 py-2 text-left">
                                <span>12</span>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <span>ATL</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>22</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>25</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>.468</span>
                            </td>
                            <td className="px-3 py-2 text-right">
                                <span>8.5</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>12-11</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>10-14</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>5-5</span>
                            </td>
                            <td className="px-3 py-2">
                                <span>W5</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Data;