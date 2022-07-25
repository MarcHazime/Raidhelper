import { useState } from "react"
import { login } from "../services/api"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


export default function LoginForm() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [modal, setModal] = useState(false);


  const { register, handleSubmit, reset } = useForm()


  const onSubmit = async (formData) => {
    try {
      await login(formData)
      navigate("/users")
    } catch (err) {
      setError("Identifiants incorrects")
      reset()
    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };



  return (
<>
    {
      modal && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-96 w-full md:inset-0 h-modal md:h-full overlay">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button onClick={toggleModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">je m'inscris</h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label htmlFor="pseudo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ton pseudo</label>
                    <input type="pseudo" name="pseudo" id="pseudoModal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ton mot de passe</label>
                    <input type="password" name="password" id="passwordModal" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'inscrire</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        {error && (
          <p>
            {error}
          </p>
        )}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ton pseudo</label>
        <input {...register("pseudo")} type="pseudo" id="pseudo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Belsilk" required />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ton mot de passe</label>
        <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="KangaetMiguel les grosses putes" required />
      </div>
      <div className="flex items-start mb-6">
      </div>
      <button type="submit" className="text-white bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <button onClick={() => toggleModal()} className="block mt-3 text-white bg-blue-700 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
        inscription
      </button>
    </form>
    </> )
 
}