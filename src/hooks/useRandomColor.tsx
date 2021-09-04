import React, { useState } from 'react'

const useRandomColor = () => {
    const [colors, setColors] = useState(["#a9d0cc", "#f40340", "#b3c4ff"]);

    return colors[Math.floor(Math.random() * colors.length)];
}

export default useRandomColor
