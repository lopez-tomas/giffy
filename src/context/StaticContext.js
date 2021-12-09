import React from 'react'

const StaticContext = React.createContext({
	name: 'this-is-without-provider',
	subscribe: false
})

export default StaticContext
