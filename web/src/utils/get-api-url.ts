export default function getApiUrl() {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:7000/";
    const PORT = import.meta.env.VITE_API_PORT || 8000

    return `${API_URL}:${PORT}`;
}