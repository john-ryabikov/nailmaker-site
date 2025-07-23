import "./Container.scss"

interface Props {
  children: React.ReactNode,
  typedClass: string
}

export default function Container({ children, typedClass}: Props) {
  return <div className={typedClass}>{children}</div>
}
