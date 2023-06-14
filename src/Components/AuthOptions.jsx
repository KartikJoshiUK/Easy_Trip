const AuthOptions = ({ type }) => {
  return (
    <div className="mt-3 flex w-[80%] flex-col items-center justify-center gap-1 border-t-2 border-gray-300">
      <h2>OR</h2>
      <h4 className="text-sm text-slate-700">
        {type === "login" ? "Login" : "Sign in"} with
      </h4>
      <div className="item-center flex justify-center gap-2">
        <button
          type="button"
          className="flex h-10 items-center gap-2 border-[1px] bg-white p-2 opacity-80 hover:border-2 hover:border-gray-800 hover:opacity-100 focus:opacity-100 focus:outline-2 focus:outline-gray-800"
        >
          <img
            className="h-full w-full object-cover"
            src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
            alt="google-logo"
          />
          <p>Google</p>
        </button>
      </div>
    </div>
  );
};

export default AuthOptions;
