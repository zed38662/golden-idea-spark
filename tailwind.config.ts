import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cosmic theme colors
				'cosmic-deep': 'hsl(var(--cosmic-deep))',
				'cosmic-mid': 'hsl(var(--cosmic-mid))',
				'cosmic-light': 'hsl(var(--cosmic-light))',
				'gold-rich': 'hsl(var(--gold-rich))',
				'gold-bright': 'hsl(var(--gold-bright))',
				'gold-light': 'hsl(var(--gold-light))',
				'gold-glow': 'hsl(var(--gold-glow))',
				'particle-white': 'hsl(var(--particle-white))',
				'particle-gold': 'hsl(var(--particle-gold))',
				'energy-blue': 'hsl(var(--energy-blue))',
				'energy-purple': 'hsl(var(--energy-purple))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Cosmic Background Animations
				'cosmic-float': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-20px) scale(1.1)' }
				},
				'nebula-drift': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'100%': { transform: 'rotate(360deg) scale(1.2)' }
				},
				// Golden Box Animations
				'treasure-pulse': {
					'0%, 100%': { transform: 'scale(1)', boxShadow: 'var(--glow-golden)' },
					'50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px hsl(var(--gold-glow)), 0 0 60px hsl(var(--gold-glow) / 0.5)' }
				},
				'treasure-bounce': {
					'0%': { transform: 'translateY(-200px) scale(0.8)' },
					'60%': { transform: 'translateY(10px) scale(1.1)' },
					'80%': { transform: 'translateY(-5px) scale(1.05)' },
					'100%': { transform: 'translateY(0px) scale(1)' }
				},
				'box-open': {
					'0%': { transform: 'rotateX(0deg)' },
					'100%': { transform: 'rotateX(-90deg)' }
				},
				// Particle Effects
				'particle-rise': {
					'0%': { transform: 'translateY(0px) scale(0)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(-50px) scale(1)', opacity: '0' }
				},
				'particle-explosion': {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'scale(1) rotate(180deg)', opacity: '1' },
					'100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' }
				},
				// Text Reveal Animations
				'idea-emerge': {
					'0%': { transform: 'translateY(50px) scale(0.5)', opacity: '0' },
					'50%': { transform: 'translateY(-10px) scale(1.2)', opacity: '0.8' },
					'100%': { transform: 'translateY(0px) scale(1)', opacity: '1' }
				},
				'text-glow-pulse': {
					'0%, 100%': { textShadow: '0 0 20px hsl(var(--gold-glow)), 0 0 40px hsl(var(--gold-bright))' },
					'50%': { textShadow: '0 0 30px hsl(var(--gold-glow)), 0 0 60px hsl(var(--gold-bright)), 0 0 80px hsl(var(--particle-gold))' }
				},
				// Button Animations
				'button-glow': {
					'0%, 100%': { boxShadow: '0 0 15px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 25px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--accent) / 0.4)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Cosmic Animations
				'cosmic-float': 'cosmic-float 8s ease-in-out infinite',
				'nebula-drift': 'nebula-drift 20s linear infinite',
				// Treasure Box Animations
				'treasure-pulse': 'treasure-pulse 2s ease-in-out infinite',
				'treasure-bounce': 'treasure-bounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'box-open': 'box-open 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				// Particle Animations
				'particle-rise': 'particle-rise 2s ease-out infinite',
				'particle-explosion': 'particle-explosion 1s ease-out forwards',
				// Text Animations
				'idea-emerge': 'idea-emerge 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'text-glow-pulse': 'text-glow-pulse 2s ease-in-out infinite',
				// Button Animations
				'button-glow': 'button-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
