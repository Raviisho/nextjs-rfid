"use client"
import React, { useEffect, useState } from 'react';
import pruebaSubmit from "@/app/keys/components/execpy.jsx";

export default function KeysPage() {
    const [respuesta, setRespuesta] = useState(null);

    useEffect(() => {
        pruebaSubmit()
            .then(result => {
                setRespuesta(result);
            })
            .catch(error => {
                // Handle error
                console.error("Error:", error);
            });
    }, []);

    return (
        <>
            <div>Keys Works</div>
            <p>{respuesta}</p>
        </>
    );
}
