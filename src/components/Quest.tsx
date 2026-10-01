import type { Difficulty } from '../types'

export type QuestProps = {
  name: string
  difficulty: Difficulty
  reward: number
  completed: boolean
  onToggle: () => void
}

function Quest({ name, difficulty, reward, completed, onToggle }: QuestProps) {
  return (
    <div className={completed ? 'panel quest complete' : 'panel quest'}>
      <h3>{name}</h3>
      <p>Difficulty: {difficulty}</p>
      <p>Reward: {reward} Gold</p>
      <p className="status">{completed ? 'COMPLETE' : 'INCOMPLETE'}</p>
      <div className="buttons">
        <button onClick={onToggle}>
          {completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
      </div>
    </div>
  )
}

export default Quest
