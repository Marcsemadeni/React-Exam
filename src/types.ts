export type Difficulty = 'easy' | 'medium' | 'hard'

export type QuestType = {
  id: number
  name: string
  difficulty: Difficulty
  reward: number
  completed: boolean
}
