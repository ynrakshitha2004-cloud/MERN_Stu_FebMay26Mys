import { React } from "react";
//List rendering
const users = [
    { id: 1, role: "Student" },
    { id: 1, role: "Trainer" },
    { id: 1, role: "Admin" },
    { id: 1, role: "Developer" },

];
export function FunctionComp() {
    return (
        <div>
            <h2>Functional component</h2>
            {/* List rendering */}
            {users.map((user) => (
                <p key={user.id} className="pclass">
                    {user.role}
                </p>
            ))}
        </div>
    );
}