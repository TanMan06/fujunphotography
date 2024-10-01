import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { name, email, message };

        try {
            const response = await fetch('3.18.221.147/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response) {
                const data = await response.json();
                setResponseMessage(data.message);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setResponseMessage('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Send Message
                </button>
            </form>
            {responseMessage && <p className="mt-4">{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;