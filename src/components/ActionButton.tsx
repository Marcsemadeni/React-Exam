export type ActionButtonProps = {
  label: string
  amount?: number
  disabled?: boolean
  onAction: (amount: number) => void
}

function ActionButton({ label, amount = 0, disabled, onAction }: ActionButtonProps) {
  return (
    <button onClick={() => onAction(amount)} disabled={disabled}>
      {label}
    </button>
  )
}

export default ActionButton
