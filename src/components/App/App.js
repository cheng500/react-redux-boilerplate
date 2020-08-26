import React from 'react'

export default React.memo(function App(props) {
  const { name } = props.app
  const { setAppName } = props

  const onChangeName = React.useCallback((event) => {
    setAppName(event.target.value)
  }, [setAppName])

  return (
    <div>
      <div data-testid="name-value">{name}</div>
      <input type="text" onChange={onChangeName}/>
    </div>
  )
})
