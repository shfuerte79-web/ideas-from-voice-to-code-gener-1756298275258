import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Driven Debugging Assistant",
    "one_liner": "Conduct debugging sessions using just your voice.",
    "why_now": "The growing complexity of code necessitates tools that simplify the debugging process.",
    "novel_mechanism": "Utilizing natural language processing to understand common debugging queries.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Speech"
    ],
    "edge_use_cases": [
      "Engaging non-technical stakeholders in the coding process",
      "Facilitating hands-free debugging in hackathons"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command parsing",
        "Error detection reporting",
        "Integration with IDEs"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "WebSockets"
      ],
      "data_bootstrap": [
        "Open-source debugging logs",
        "Community-contributed error patterns"
      ],
      "risk": [
        "Insufficient NLP accuracy",
        "Limited IDE support"
      ],
      "mitigation": [
        "Iterative training with user feedback",
        "Focus on popular IDEs first"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live voice demo of debugging",
        "Side-by-side coding vs voice debugging comparison"
      ],
      "channels": [
        "ProductHunt",
        "Reddit",
        "YouTube tutorials"
      ],
      "pricing": {
        "free": "Basic functionalities",
        "pro": "$9.99/month for advanced features",
        "business": "$49/month for team usage"
      }
    },
    "moat": [
      "First-mover advantage in voice debugging",
      "Partnerships with IDE platforms",
      "User-community driven improvements"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "This idea focuses on a unique niche of voice command debugging, which is less saturated compared to voice-to-code generation."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}