import React from 'react';
import './style.css';

export function TabGroup(props) {
    const { children } = props;
    return (
        <div className="Tabs">
            <div className="container">
                <ul className="TabGroup">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export function TabItem(props) {
    const { children } = props;
    return (
        <li className="TabItem">{children}</li>
    )
}