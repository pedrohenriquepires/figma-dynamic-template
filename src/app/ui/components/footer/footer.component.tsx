import { Actions, Column, Container, Credits } from './footer.styled'
import { Logo } from '../logo/logo.component'
import { Button } from '../button/button.component'
import { useCompile } from '~/app/hooks/use-compile.hook'
import { emit } from '@create-figma-plugin/utilities'
import { NotifyHandler } from '~/plugin/events/notify/notify.types'

export const Footer = () => {
  const { compile } = useCompile()

  return (
    <Container>
      <Actions>
        <Button variant="primary" onClick={compile}>Compile</Button>
        <Button variant="secondary" onClick={() => emit<NotifyHandler>('NOTIFY', 'Working on it')}>Docs</Button>
      </Actions>

      <Column>
        <Logo width={100} />
      </Column>

      <Credits>
        <div>
          v1.0.0
        </div>

        <div>
          Made with ☕ by{' '}
          <a target="_blank" href="https://www.github.com/pedrohenriquepires">
            Pedro Henrique Pires
          </a>
        </div>
      </Credits>
    </Container>
  )
}
