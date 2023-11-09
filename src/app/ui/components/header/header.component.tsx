import { useTemplateSelection } from '~/app/hooks/use-template-selection.hook'
import { Container } from './header.styled'
import { Properties } from './properties/properties.component'

export const Header = () => {
  const { properties } =  useTemplateSelection()

  return (
    <Container>
      <Properties properties={properties} />
    </Container>
  )
}