

import LoginForm from "../components/LoginForm";


export default function LoginPage() {


    return (
        <div className="bg-[url('./assets/full_random.png')] bg-yellow-400 min-h-screen flex flex-grow justify-center align-center">
            <div className=" p-8 bg-white m-auto w-3/6 max-w-md drop-shadow-md rounded-lg " >
                <LoginForm />
            </div>
        </div>

    )

}

