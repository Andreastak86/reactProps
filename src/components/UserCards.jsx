import React from "react";

export default function UserCards({ name, age, location, email, phone, role }) {
    return (
        <div>
            <h2>Navn: {name}</h2>
            <p>Alder: {age}</p>
            <p>Sted: {location}</p>
            <p>Email: {email}</p>
            <p>Telefon: {phone}</p>
            <p>Rolle: {role}</p>
        </div>
    );
}
