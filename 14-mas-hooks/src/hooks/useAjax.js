///ajax hook

import React, { useEffect, useState } from "react";


export const useAjax = (url) => {

    const [estado, setEstado] = useState({
        datos: null,
        cargando: true

    });

    const getData = async () => {

        setEstado({
            ...estado,
            cargando: true
        });

        const peticion = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1"
            }
        });

        const datos = await peticion.json();
        setEstado({
            datos: datos.data,
            cargando: false
        });

    }

    useEffect(() => {
        getData();
    }, [url]);

    return {
        datos: estado.datos,
        cargando: estado.cargando
    }
}