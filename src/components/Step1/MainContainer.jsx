import React from 'react'

import { Container } from '@mui/material'

export const MainContainer = ({children, ...props}) => {
    return(
        <Container {...props}>{children}</Container>
    )
}