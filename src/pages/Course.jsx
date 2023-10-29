import { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";

const Course = (props) => {
    useEffect(() => {
        initTE({ Ripple });
    }, []);
    return(
        <>
            <h1 className="mb-2">Course</h1>
            <p className="mb-6 text-base text-neutral-500 dark:text-neutral-300">ID: {props.url}</p>

            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-4xl md:flex-row">
                <img className="h-96 w-full rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg h-auto" src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" alt="Course thumbnail" />
                <div className="flex flex-col justify-start max-w-3xl p-6">
                    <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">Exploring Quantum Mechanics: The Subatomic World Unveiled</h5>
                    <p className="mb-4 text-sm text-warning-600 dark:text-warning-400">* Video and notes included.</p>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">Embark on a journey into the fascinating realm of quantum mechanics, where the fundamental principles of particles and waves merge, unraveling the mysteries of the subatomic universe. This course offers a comprehensive exploration of quantum phenomena, from wave-particle duality to quantum entanglement, providing a deep understanding of this cutting-edge field.</p>
                    <div className="grid grid-cols-2 gap-2 max-w-xs mb-4">
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Subject</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">Physics</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Tutor</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">Lim Wen Hao</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Level</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">Postgraduate</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Language</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">English</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>Price</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">3.2 SOL / 300.00 USD</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300"><b>View</b></p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">0</p>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300 mb-4">Uploaded on 29 October 2023 at 11:45:14 UTC+8</p>
                    <div className="w-full grid grid-cols-2 gap-2">
                    <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">Enroll</button>
                    <button type="button" className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-ripple-init data-te-ripple-color="light">+ Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;