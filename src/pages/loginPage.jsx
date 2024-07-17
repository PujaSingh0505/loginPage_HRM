const loginPage = () => {
  return (
    <div className="m-auto">
      <div className="flex justify-between">
        {/* login section */}

        <div className="">

          <div className="flex flex-col mt-[100px] mx-10 my-5 gap-8">

            <div className="flex justify-between">
              <img src="/assets/logo.png" className=""></img>
              <h1 className="flex justify-center font-urbanist font-semibold leading-5 text-lg text-[#000000]">ONE.HR</h1>
            </div>   

            <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-urbanist font-semibold leading-7 text-[#1A1A1A]">Nice to see you again</h2>


        <form className="flex flex-col gap-5">

            <div className="flex flex-col gap-2">
               <div className="flex flex-col gap-1 ">
                <h3 className="flex font-urbanist text-xs leading-3 px-[16px]">login</h3>
              <input id="email" name="email" type="email" autoComplete="email" required className="flex justify-between px-[16px] text-[#808080] font-normal rounded-md bg-gray-200" placeholder="Email or phone number" />
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="flex font-urbanist text-xs leading-3">password</h3>
              <input id="email" name="email" type="email" autoComplete="email" required className="flex justify-between px-[16px] text-[#808080] font-normal rounded-md bg-gray-200" placeholder="Enter password" />
            </div>
            </div>


          <div className="flex  justify-between">
            <div className="flex ">
              <input id="remember-me" name="remember-me" type="checkbox" className="" />
              <label htmlFor="remember-me" className="font-urbanist font-normal text-xs leading-5 text-[#1A1A1A]">Remember me</label>
            </div>

            <div className="flex">
              <a href="#" className="flex justify-end font-urbanist font-normal text-sx leading-5 text-[#007AFF]">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="flex justify-center w-full px-4 py-3 font-urbanist font-bold text-sm leading-5 text-[#FFFFFF] bg-[#1FBE8E] rounded-md">
              Sign in
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-5">
        <div className="flex justify-center text-center bg-[#333333] rounded-xl ">
            <button className="flex justify-center  font-urbanist font-normal text-sm leading-5 text-[#FFFFFF] gap-1 py-2 ">
              <img src="/assets/google_logo.png" alt="Google logo" className="flex justify-center" />
              Sign in with Google
            </button>
          </div>

          <div className="flex justify-between text-center">
            <p className="font-urbanist font-normal text-xs leading-5 text-[#1A1A1A]"> Don't have an account? <a href="#" className="font-urbanist font-normal text-xs leading-5 text-[#007AFF]">Sign up now</a></p>
          </div>

          </div>



      </div>
      </div>
    </div>
    </div>
   
        {/* image section */}
        <div className="">
          <img src="/assets/loginImage.png"></img>
        </div>
      
    </div>
    </div>
  );
};

export default loginPage;
