import React from "react";

export default function Secondscounter({ segundos }) {
    let minutos = Math.floor(segundos / 60);
    let segs = segundos % 60;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{minutos}:{segs < 10 ? "0" + segs : segs}</h5>
            </div>
        </div>
    )
}