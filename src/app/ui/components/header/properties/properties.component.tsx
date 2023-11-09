import { useCallback } from 'react'
import { StorageKeys } from '~/@types/storage-keys'
import { useStorage } from '~/app/hooks/use-storage.hook'
import { Empty, Property, PropertiesList, Title, Toggle, Container } from './properties.styled'

interface Props {
  properties: string[]
}

export const Properties = ({ properties }: Props) => {
  const [visible, setVisible] = useStorage<boolean>(StorageKeys.PROPERTIES_VISIBLE, true)
  const toggleLabel = visible ? 'hide' : 'show'
  
  const Properties = useCallback(() => {
    if(!visible) return null

    if(!properties.length) {
      return <Empty>No properties were found in this template.</Empty>
    }
    
    return (
      <PropertiesList>
        {properties.map((property) => (
          <Property key={property}>{property}</Property>
        ))}
      </PropertiesList>
    )
  }, [visible, properties])

  const handleToggle = () => setVisible(current => !current)

  return (
    <Container>
      <Title>
        Properties on your template <Toggle onClick={handleToggle}>[{toggleLabel}]</Toggle>
      </Title>
      
      <Properties />
    </Container>
  )
}