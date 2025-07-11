import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
    ({ pagina, mensaje }) => {


        const [empleados, setEmpleados] = useState([]);

        const conseguirEmpleados = async (p) => {
            const url = "https://reqres.in/api/users?page=" + p;
            const peticion = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "reqres-free-v1"
                }
            });
            const { data: empleados } = await peticion.json();

            setEmpleados(empleados);
        }

        useEffect(() => {
            console.log("Se ha vuelto a renderizar Empleados");
        }, [empleados]);

        useEffect(() => {
            conseguirEmpleados(pagina);
            mensaje();
        }, [pagina]);

        return (
            <div>
                <p>Mostrando la pagina: {pagina}</p>
                <ul className='empleados'>
                    {empleados.length >= 1 &&
                        empleados.map(empleado => {
                            return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
);