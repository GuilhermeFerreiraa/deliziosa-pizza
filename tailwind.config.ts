
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/app/**/*{.ts,tsx}", "./src/components/**/*{.ts,tsx}"],
 theme: {
   extend: {
     fontFamily: {
       heading: "Inter_600SemiBold",
       subtitle: "Inter_500Medium",
       body: "Inter_400Regular", 
       bold: 'Inter_700Bold',
     },
     colors: {
      primary: '#BF0A25',
      secondary: '#FF9E03'
     }
    },
 },
 plugins: [],
};
