import styles from './Cabecalho.module.css'
import { Cabecalho as Cbc, Title } from './styles'

export type Props = {
  children: string
}

const Cabecalho = (props: Props) => (
  <Cbc>
    <Title>{props.children}</Title>
  </Cbc>
)

export default Cabecalho
