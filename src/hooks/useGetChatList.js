import { useEffect, useState } from 'react';

const useGetChatList = () => {
    const [loading, setLoading] = useState(false);
    const [chatList, setChatList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getChatList = async () => {
            setLoading(true);
            try {
                const res = await fetch(import.meta.env.VITE_USERS_API, {
                    method: 'GET',
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                // Filter out duplicates based on a unique identifier (e.g., user id)
                const uniqueChatList = filterDuplicates(data.data.data, 'id');
                setChatList(uniqueChatList);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Error fetching chats:', error.message);
                setError('Error fetching chats'); // Set custom error message or handle error state as needed
            } finally {
                setLoading(false);
            }
        };

        getChatList();
    }, []);

    // Function to filter duplicates based on a unique identifier
    const filterDuplicates = (array, key) => {
        const seen = new Set();
        return array.filter(item => {
            const identifier = item[key];
            return seen.has(identifier) ? false : seen.add(identifier);
        });
    };

    return { loading, chatList, error };
};

export default useGetChatList;
