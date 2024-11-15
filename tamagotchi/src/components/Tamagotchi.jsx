import { useState, useEffect } from 'react';


export function Tamagotchi() {
    const [hunger, setHunger] = useState(50);
    const [happiness, setHappiness] = useState(50);
    const [health, setHealth] = useState(100);
    const [higiene, setHigiene] = useState(100);
    const [energia, setEnergia] = useState(100);
    const [nivel, setNivel] = useState(1);
    const [experiencia, setExperiencia] = useState(0);
    

    const feed = () => {
        setHunger((prev) => Math.min(prev + 20, 100));
        setHealth((prev) => Math.min(prev + 5, 100));
    };


    const play = () => {
        setHappiness((prev) => Math.min(prev + 20, 100));
        setHunger((prev) => Math.max(prev - 5, 0));
        setHealth((prev) => Math.max(prev - 5, 0));
        setHigiene((prev) => Math.max(prev - 5, 0));

    };


    const sleep = () => {
        setHealth((prev) => Math.min(prev + 10, 100));
        setHappiness((prev) => Math.max(prev - 5, 0));
        setEnergia((prev) => Math.min(prev + 10, 100));

    };

    const limpieza = () => {
        setHigiene((prev) => Math.min(prev + 10, 100));
        setEnergia((prev) => Math.max(prev - 5, 0));


    };





    
    useEffect(() => {
        const timer = setInterval(() => {
            setHunger((prev) => Math.max(prev - 1, 0));
            setHappiness((prev) => Math.max(prev - 1, 0));
            setHealth((prev) => Math.max(prev - 1, 0));
            setHigiene((prev) => Math.max(prev - 1, 0));
            setEnergia((prev) => Math.max(prev - 1, 0));

        }, 5000);
        return () => clearInterval(timer);
    }, [hunger, happiness, health, higiene, energia, nivel, experiencia]);

    useEffect(() => {
        const timer = setInterval(() => {
         

                if (hunger > 50 && happiness > 50 && health > 50 && higiene > 50 && energia > 50) {
     
                    setExperiencia((prev) => Math.min(prev + 20, 100) );
                   
            }
    
                if (experiencia >= 100){
                    setNivel((prev) => Math.min(prev + 1, 10))
                    setExperiencia(0) 
                }

        }, 5000);
        return () => clearInterval(timer);
    }, [hunger, happiness, health, higiene, energia, nivel, experiencia]);


    const getProgressColor = (value) => {
        if (value > 60) return "bg-green-500";
        if (value > 20) return "bg-yellow-500";
        return "bg-red-500";
    };
    const getProgressColor2 = (value) => {
        return "bg-blue-500";
    };


    // Función para mostrar el mensaje de estado del Tamagotchi

    const getStatusMessage = () => {
        if (hunger < 20) return <img src="/hambre.jpg" alt="Tengo hambre" />;
    if (hunger === 0) return <img src="/muerte.png" alt="Game Over" />;
    if (happiness < 20) return <img src="/triste.jpg" alt="Estoy triste" />;
    if (happiness === 0) return <img src="/muerte.png" alt="Game Over" />;
    if (health < 20) return <img src="/enfermo.png" alt="No me siento bien" />;
    if (health === 0) return <img src="/muerte.png" alt="Game Over" />;
    if (higiene < 20) return <img src="/sucio.png" alt="No me siento bien" />;
    if (higiene === 0) return <img src="/muerte.png" alt="Game Over" />;
    if (energia < 20) return <img src="/cansado.jpg" alt="No me siento bien" />;
    if (energia === 0) return <img src="/muerte.png" alt="Game Over" />;
    
    return <img src="/feliz.gif" alt="Estoy feliz" />;
    };
                                                                
/*
    useEffect(() => {
        
        const timer = setInterval(() => {
            console.log(experiencia);
            console.log( hunger );
            if (hunger > 50 && happiness > 50 && health > 50 && higiene > 50 && energia > 50) {
 
                //setExperiencia((prev) => Math.min(prev + 20, 100) );
                setExperiencia(5); 
        }

            if (experiencia >= 100){
                setNivel((prev) => Math.min(prev + 1, 10))
                setExperiencia(0) 
                console.log("holaa")
            }

        }, 3000);
        return () => clearInterval(timer);
    }, []);
*/

    return (

        <div className="p-4 bg-white rounded-lg shadow-md w-80">
             <div className="mb-4">
                <label className="block font-medium mb-1">Nivel:{nivel}</label>
                <div className="bg-gray-300 h-4 rounded overflow-hidden">
                    <div className={`${getProgressColor2(experiencia)} h-full`}
                        style={{ width: `${experiencia}%` }} />
                </div>
            </div>




            <h1 className="text-2xl font-bold text-center mb-4">🐱🐱
                Tamagotchi</h1>
            {/* Mensaje de estado */}
            <p className="text-center text-lg font-semibold mb-4">{getStatusMessage()}</p>
            {/* Barra de Progreso para Hambre */}
            <div className="mb-4">
                <label className="block font-medium mb-1">Hambre:</label>
                <div className="bg-gray-300 h-4 rounded overflow-hidden">
                    <div className={`${getProgressColor(hunger)} h-full`} style={{
                        width: `${hunger}%`
                    }} />
                </div>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-1">Felicidad:</label>
                <div className="bg-gray-300 h-4 rounded overflow-hidden">
                    <div className={`${getProgressColor(happiness)} h-full`}
                        style={{ width: `${happiness}%` }} />
                </div>
            </div>
            {/* Barra de Progreso para Salud */}
            <div className="mb-4">
                <label className="block font-medium mb-1">Salud:</label>
                <div className="bg-gray-300 h-4 rounded overflow-hidden">

                    <div className={`${getProgressColor(health)} h-full`} style={{
                        width: `${health}%`
                    }} />
                </div>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-1">Higiene:</label>
                <div className="bg-gray-300 h-4 rounded overflow-hidden">

                    <div className={`${getProgressColor(higiene)} h-full`} style={{
                        width: `${higiene}%`
                    }} />
                </div>
            </div> <div className="mb-4">
                <label className="block font-medium mb-1">Energia:</label>
                <div className="bg-gray-300 h-4 rounded overflow-hidden">

                    <div className={`${getProgressColor(energia)} h-full`} style={{
                        width: `${energia}%`
                    }} />
                </div>
            </div>
            {/* Botones de interacción */}
            <div className="flex space-x-2 mt-4">
                <button onClick={feed} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Feed</button>
                <button onClick={play} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Play</button>
                <button onClick={sleep} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Sleep</button>
                <button onClick={limpieza} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Limpieza</button>

            
                
            </div>
        </div>
    );
}