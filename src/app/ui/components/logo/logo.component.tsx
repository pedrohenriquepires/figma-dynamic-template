import logoVertical from '~/app/assets/logo-vertical.svg'
import logoHorizontal from '~/app/assets/logo-horizontal.svg'

interface Props {
  vertical?: boolean
  width?: number
  height?: number
}

export const Logo = ({ vertical, width, height }: Props) => {
  return <img width={width} height={height} src={vertical ? logoVertical : logoHorizontal} />
}