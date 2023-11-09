import { Container, Title } from './content.styled'
import { Editor } from './editor/editor.component'

export const Content = () => {
  return (
    <Container>
      <Title>Editor</Title>
      <Editor />
    </Container>
  )
}