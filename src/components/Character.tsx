import ActionButton from './ActionButton'

export type CharacterProps = {
  name: string
  characterClass: string
  level: number
  health: number
  onDamage: (amount: number) => void
  onHeal: (amount: number) => void
  onLevelUp: () => void
  onReset: () => void
}

function Character({
  name,
  characterClass,
  level,
  health,
  onDamage,
  onHeal,
  onLevelUp,
  onReset,
}: CharacterProps) {
  const defeated = health === 0

  return (
    <div className="panel">
      <h2>{name}</h2>
      <p>Class: {characterClass}</p>
      <p>Level: {level}</p>
      <p>Health: {health}</p>

      {defeated && <p className="defeated">{name} has been defeated!</p>}

      <div className="buttons">
        <ActionButton label="Take Damage" amount={10} disabled={defeated} onAction={onDamage} />
        <ActionButton label="Heal" amount={10} disabled={defeated} onAction={onHeal} />
        <ActionButton label="Level Up" onAction={onLevelUp} />
        <ActionButton label="Reset" onAction={onReset} />
      </div>
    </div>
  )
}

export default Character
