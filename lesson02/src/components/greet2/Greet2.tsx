type Greet2Props = {
  name?: string
}

export const Greet2 = (props: Greet2Props) => {
  return <div>Hello {props.name}</div>
}
