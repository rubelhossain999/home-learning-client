import React from 'react';

const Termsandconditions = () => {
    return (
        <section className="p-10 bg-slate-600 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto">
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">Home Learning RH</span>
                <h2 className="text-5xl font-bold text-center text-gray-50">Term and Condition</h2>
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900 dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">1</div>
                        <p className="text-2xl font-semibold">
                            <b>One.</b>We monitor every user behavior which provides us future security.
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900 dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">2</div>
                        <p className="text-2xl font-semibold">
                            <b>Two.</b>We are obliged to accept automatic payment if you have enabled automatic payment when purchasing our digital products.
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900 dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">3</div>
                        <p className="text-2xl font-semibold">
                            <b>Three.</b>Premium contacts on our website can never be used without our permission. That is a legal offence, we will be bound to take action against you later.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Termsandconditions;