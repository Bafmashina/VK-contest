import { Container } from '@mui/material'
import React from 'react'

export const MainContainer = ({children, ...props}) => {
    return(
        <Container {...props}>{children}</Container>
    )
}