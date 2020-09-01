import React from "react";

export default function TaskItem({ taskTitle }) {
    return (
        <li>
            <b>{taskTitle}</b>
        </li> 
    );
}