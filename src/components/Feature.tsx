import React from 'react';
import type {FeatureProps} from "../types";


const Feature: React.FC<FeatureProps> = ({ bg, icon, title, text }) => {
    return (
        <div className="flex gap-4 text-left">
            <div className={`w-14 h-14 ${bg} rounded-full flex items-center justify-center shrink-0`}>
                <img
                    src={icon}
                    alt={title}
                    className="w-7 h-7 object-contain"
                />
            </div>

            <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Feature;