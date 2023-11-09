import SimpleEditor from 'react-simple-code-editor'
import { useGlobalList } from '~/app/providers'
import { Container } from './editor.styled'
import { hightlightWithLineNumbers } from './highlight-with-line-numbers'

export const Editor = () => {
  const [list, setList] = useGlobalList()

  return (
    <Container>
      <SimpleEditor
        className="editor"
        textareaClassName="editor__text-area"
        spellCheck="false"
        placeholder="Insert you array here"
        padding={10}
        highlight={code => hightlightWithLineNumbers(code, 'editor__line-number')}
        onValueChange={setList}
        value={list}
      />
    </Container>
  )
}