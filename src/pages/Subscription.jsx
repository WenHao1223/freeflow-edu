const Subscription = () => {
    return(
        <>
            <div className="container my-24 mx-auto md:px-6">
              <section className="mb-32">
                <h1 className="mb-12 text-center text-3xl font-bold">Choose your learning plan and join our global community</h1>
                <div className="mb-6">
                  <div className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="pills-home02" role="tabpanel" aria-labelledby="pills-home-tab02" data-te-tab-active>
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">

                      <div className="mb-6 lg:mb-0">
                        <div className="block h-full rounded-lg bg-sky-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700">
                          <div className="border-b-2 dark:border-black border-opacity-100 p-6 text-center ">
                            <p className="mb-4 text-sm uppercase">
                              <strong>Basic</strong>
                            </p>
                            <h3 className="mb-6 text-3xl">
                              <strong>Current Plan</strong>
                            </h3>
              
                            <button type="button" className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)] disabled:cursor-auto" data-te-ripple-init data-te-ripple-color="light"disabled>Free
                            </button>
                          </div>
                          <div className="p-6">
                            <ol className="list-inside">
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited updates
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git repository
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm installation
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 lg:mb-0">
                        <div className="block h-full rounded-lg bg-orange-500 dark:bg-orange-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                          <div className="border-b-2 border-black border-opacity-100 p-6 text-center dark:bg-orange-500">
                            <p className="mb-4 text-sm uppercase">
                              <strong className="text-black">Recommended</strong>
                            </p>
                            <h3 className="mb-6 text-3xl">
                              <strong className="text-black">$ 19</strong>
                              <small className="text-base text-black dark:text-black">/month</small>
                            </h3>
                            <button type="button" className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)] bg-neutral-950 hover:text-black" data-te-ripple-init data-te-ripple-color="light"> Buy
                            </button>
                          </div>
                          <div className="p-6 dark:bg-orange-500">
                            <ol className="list-inside">
                              <li className="mb-4 flex dark:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited updates
                              </li>
                              <li className="mb-4 flex dark:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git repository
                              </li>
                              <li className="mb-4 flex dark:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm installation
                              </li>
                              <li className="mb-4 flex dark:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Code examples
                              </li>
                              <li className="mb-4 flex dark:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium snippets
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 lg:mb-0">
                        <div className="block h-full rounded-lg bg-sky-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700">
                          <div className="border-b-2 dark:border-black border-opacity-100 p-6 text-center">    
                            <p className="mb-4 text-sm uppercase">
                              <strong className="text-black">Advanced</strong>
                            </p>
                            <h3 className="mb-6 text-3xl">
                              <strong className="text-black">$ 69</strong>
                              <small className="text-base text-neutral-500 dark:text-neutral-300">/month</small>
                            </h3>
                            <button type="button" className="inline-block w-full rounded bg-[hsl(0,0%,95%)] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-[hsl(0,0%,93%)] focus:bg-[hsl(0,0%,95%)] focus:outline-none focus:ring-0 active:bg-[hsl(0,0%,90%)] hover:text-white hover:bg-black" data-te-ripple-init data-te-ripple-color="light"> Buy
                            </button>
                          </div>
                          <div className="p-6">
                            <ol className="list-inside">
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>hi
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git repository
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm installation
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Code examples
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium snippets
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium support
                              </li>
                              <li className="mb-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>Drag&amp;Drop builder
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </>
    );
  }
  
  export default Subscription;