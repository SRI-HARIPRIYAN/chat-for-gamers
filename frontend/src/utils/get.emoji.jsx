export const emojis = ["🌿", "🍃", "🌱", "🌲", "🌳", "🌴", "🌵", "🌾", "🌷", "🌸", 
                "🌹", "🌺", "🌻", "🌼", "🌽", "❄️", "☃️", "🌨️", 
                "🌬️", "🧊", "🏔️", "🌦️", "🌧️", "⛈️", "🌩️", "🌪️", "🌫️", 
                "☔️", "🌊"];

export const getEmoji = ()=>{
    return emojis[Math.floor(Math.random() * emojis.length)]
}

