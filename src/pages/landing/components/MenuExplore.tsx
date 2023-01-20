import { useNavigate } from 'react-router-dom'

export const MenuExplore = () => {
    const navigation = useNavigate()

    const goToMain = () => navigation('/main')
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        'url(https://cuk-it.com/wp-content/uploads/2021/07/thumb03-1-1024x576.jpg)',
                }}
            >
                <div className="hero overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="card w-2 sm:w-full bg-primary">
                        <div className="card body items-center text-center p-5 glass">
                            <h1 className="mb-5 ml-5 mr-5 mt-5 text-5xl font-bold text-inherit">
                                Prueba nuestras delicias
                            </h1>
                            <p className="mb-5 ml-5 mr-5 mt-5 text-xl">
                                Las mejores donas se consiguen aquí
                            </p>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={goToMain}
                                    className="mb-5 btn btn-accent"
                                >
                                    Explorar Menú
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
