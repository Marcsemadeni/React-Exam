import { useEffect, useState } from 'react'
import Character from './components/Character'
import Quest from './components/Quest'
import type { QuestType } from './types'
import './App.css'

const adventurer_name = 'Jimbo, The Destroyer'
const adventurer_class = 'Berserker'
const initial_level = 4
const max_health = 100

const initial_quests: QuestType[] = [
  { id: 1, name: 'Defeat the Cave Troll', difficulty: 'hard', reward: 500, completed: false },
  { id: 2, name: 'Reach level 5', difficulty: 'medium', reward: 250, completed: false },
  { id: 3, name: 'Defeat 10 Goblins', difficulty: 'easy', reward: 100, completed: false },
]

function App() {
  const [health, setHealth] = useState(max_health)
  const [level, setLevel] = useState(initial_level)
  const [quests, setQuests] = useState(initial_quests)

  const handleDamage = (amount: number) => {
    setHealth((h) => Math.max(h - amount, 0))
  }

  const handleHeal = (amount: number) => {
    setHealth((h) => Math.min(h + amount, max_health))
  }

  const handleLevelUp = () => {
    setLevel((l) => l + 1)
  }

  const handleReset = () => {
    setHealth(max_health)
    setLevel(initial_level)
    setQuests(initial_quests)
  }

  const handleToggleQuest = (id: number) => {
    setQuests((current) =>
      current.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    )
  }

  // runs on first render and again whenever the adventurer's health changes
  // keeps the browser tab title the same as the adventurer's status.
  useEffect(() => {
    document.title =
      health === 0
        ? `${adventurer_name} - DEFEATED`
        : `${adventurer_name} - HP ${health}`
  }, [health])

  return (
    <section id="guild">
      <h1>Adventurer's Guild</h1>

      <Character
        name={adventurer_name}
        characterClass={adventurer_class}
        level={level}
        health={health}
        onDamage={handleDamage}
        onHeal={handleHeal}
        onLevelUp={handleLevelUp}
        onReset={handleReset}
      />

      <h2>Quests</h2>
      {quests.map((quest) => (
        <Quest
          key={quest.id}
          name={quest.name}
          difficulty={quest.difficulty}
          reward={quest.reward}
          completed={quest.completed}
          onToggle={() => handleToggleQuest(quest.id)}
        />
      ))}
    </section>
  )
}

export default App
