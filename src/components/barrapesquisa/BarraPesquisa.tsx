    import React from 'react';
    import { useState } from 'react';
    import { Hearts } from 'react-loader-spinner';
    import { useNavigate } from 'react-router-dom';
    import { Link } from 'react-router-dom';

    function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
        return (
        <input
            type="text"
            placeholder="Busque suas categorias"
            className="w-full max-w-md p-2 border border-gray-300 rounded shadow-sm mb-6"
            onChange={(e) => onSearch(e.target.value)}
        />
        );
    }
    
    export default SearchBar;