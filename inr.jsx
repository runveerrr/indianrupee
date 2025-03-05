import React from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

export default function IndianRupeeWebsite() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="text-center py-6">
        <img
          src="https://cdn.discordapp.com/attachments/1346775291304869969/1346775331658268683/inr.png"
          alt="Indian Rupee Token"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Indian Rupee Token</h1>
        <p className="text-lg mt-2 text-gray-300">
          The future of INR-backed cryptocurrency
        </p>
      </header>

      <main className="text-center max-w-2xl">
        <p className="text-gray-400 text-lg mb-6">
          Indian Rupee Token is currently a simple token but will be backed by INR in the coming months.
          Join us in revolutionizing the crypto space with a truly INR-backed digital asset.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Token Details</h2>
          <p className="mt-2 text-gray-400">Contract Address:</p>
          <p className="text-green-400 font-mono">0xC479A3ff0E93717F482C47951b4D9a2Ce9d6F7B0</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10">Join Our Community</h2>
        <div className="flex space-x-6 mt-4 justify-center">
          <a href="https://dsc.gg/indianrupee" target="_blank" className="text-blue-500 hover:text-blue-400">
            <FaDiscord size={30} />
          </a>
          <a href="#" target="_blank" className="text-blue-400 hover:text-blue-300">
            <FaTwitter size={30} />
          </a>
          <a href="#" target="_blank" className="text-gray-300 hover:text-gray-200">
            <FaGithub size={30} />
          </a>
        </div>
      </main>
    </div>
  );
}
