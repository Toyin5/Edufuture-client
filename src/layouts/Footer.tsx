import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <p className="text-center">
                    Copyright © 2023 Edufuture. All rights reserved.
                </p>
                <p className="text-center">
                    Powered by <a href="https://vercel.com/" className="text-gray-500">Vercel</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
