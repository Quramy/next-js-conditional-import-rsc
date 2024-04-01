import { awesomeFn } from "#util"

export function Shared() {
  const value = awesomeFn();
  return (
    <p>{value}</p>
  )
}
