'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './AiAssistant.module.css';
import Image from 'next/image';

export default function AiAssistant({ initialPrompt = '' }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState(initialPrompt)
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: 'Hi 👋 I can help you choose a SIP and start it — ask me anything!' }
  ])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function sendMessage(e) {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return

    const userMsg = { id: Date.now(), role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })

      if (!res.ok) throw new Error('AI API error')
      const data = await res.json()
      // Expect data.reply and optionally data.suggestions (structured)
      const botMsg = { id: Date.now()+1, role: 'assistant', text: data.reply }
      setMessages(prev => [...prev, botMsg])

      // If assistant returned actionable suggestion, show CTA card
      if (data.suggestions) {
        const suggestionMsg = { id: Date.now()+2, role: 'assistant', text: formatSuggestions(data.suggestions), meta: { suggestions: data.suggestions } }
        setMessages(prev => [...prev, suggestionMsg])
      }

    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now()+3, role: 'assistant', text: 'Sorry — something went wrong. Please try again.' }])
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  function formatSuggestions(suggestions) {
    if (!Array.isArray(suggestions)) return ''
    return suggestions.map(s => `${s.fundName} — ₹${s.sipAmount}/month — ${s.returns || ''}`).join('\n')
  }

  // Simple handler when user clicks Start SIP on suggestion
  function handleStartSIP(suggestion) {
    // Prefill a form or open a modal — we'll demo a simple prompt message
    const prefill = `I want to start SIP in ${suggestion.fundName} with ₹${suggestion.sipAmount} per month.`
    setMessages(prev => [...prev, { id: Date.now()+4, role: 'system', text: `Opening SIP flow for ${suggestion.fundName}` }])
    setInput(prefill)
    setOpen(true)
  }

  return (
    <div className={styles.wrapper} aria-live="polite">
      <button className={styles.fab} onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#f0f0f0" width="32" height="32" viewBox="0 0 32 32" id="icon"><defs><style></style></defs><path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z"/><path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z"/><path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z"/><path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32" fill='none'/></svg>
        {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="white" strokeWidth="1.5"/></svg> */}
        <span className={styles.badge}>CHAT</span>
      </button>

      {open && (
        <div className={styles.panel} role="dialog" aria-label="AI Assistant">
          <div className={styles.header}>
            <div className={styles.title}>Ideas2Invest — AI Advisor</div>
            <button className={styles.close} onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className={styles.messages}>
            {messages.map(m => (
              <div key={m.id} className={`${styles.message} ${m.role === 'user' ? styles.user : styles.bot}`}>
                <div className={styles.meta}>{m.role === 'user' ? 'You' : (m.role === 'assistant' ? 'Advisor' : 'System')}</div>
                <div className={styles.text}>
                  {m.text.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}

                  {/* If this message has structured suggestions, render CTAs */}
                  {m.meta?.suggestions?.length > 0 && (
                    <div className={styles.suggestions}>
                      {m.meta.suggestions.map((s, i) => (
                        <div key={i} className={styles.suggestionCard}>
                          <div>
                            <strong>{s.fundName}</strong>
                            <div className={styles.small}>{s.category} • {s.risk}</div>
                          </div>
                          <div className={styles.actions}>
                            <button onClick={() => handleStartSIP(s)}>Start SIP</button>
                            <button onClick={() => setMessages(prev => [...prev, { id: Date.now()+10+i, role:'assistant', text: `Show me performance for ${s.fundName}` }])}>View</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputBar} onSubmit={sendMessage}>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask: e.g., Suggest top ELSS funds for tax saving" />
            <button type="submit" disabled={loading}>{loading ? '...' : 'Send'}</button>
          </form>
        </div>
      )}
    </div>
  )
}
