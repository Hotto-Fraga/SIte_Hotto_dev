"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { LuSun, LuMoon } from 'react-icons/lu'
import '@/styles/ui/ThemeToggle.css'

export default function ToggleThemeButton() {

    const [isMounted, setIsMounted] = useState(false)

    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => { setIsMounted(true) }, [])

    // Se o componente ainda não montou, não renderize nada (ou um placeholder)
    // Isso garante que o HTML do servidor e do cliente sejam IDÊNTICOS na primeira vez.
    if (!isMounted) {
        // Pode retornar null ou um placeholder para evitar "pulo" no layout
        return <div className="w-6 h-6" /> // Placeholder (requer Tailwind)
    }

    // Se estamos montados, podemos checar o tema com segurança
    const isDark = resolvedTheme === 'dark'

    return (
        <button
            className='ToggleTheme_button'
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            style={{
                background: isDark 
                    ? 'linear-gradient(135deg, #f97316, #dc2626)' 
                    : 'linear-gradient(135deg, #fb923c, #ef4444)',
                color: 'white',
                border: 'none'
            }}
        >
            {isDark ?
                <LuSun size={20} /> :
                <LuMoon size={20} />
            }
        </button>
    )
}